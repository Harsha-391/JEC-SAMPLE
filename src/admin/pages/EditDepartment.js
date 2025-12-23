import React, { useState, useEffect, useMemo, useRef } from 'react';
import { db, storage } from '../../firebase'; //
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore"; //
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; //
import ImageUpload from '../components/ImageUpload'; //
import ReactQuill, { Quill } from 'react-quill'; //
import 'react-quill/dist/quill.snow.css'; //
import BlotFormatter from 'quill-blot-formatter'; //
import htmlEditButton from "quill-html-edit-button"; //
import { ToastContainer, toast } from 'react-toastify'; //
import { v4 as uuidv4 } from 'uuid'; //

// ==========================================================================
// 1. STABLE REGISTRATION (Fixes crashes and forces inline styles)
// ==========================================================================
Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register("modules/htmlEditButton", htmlEditButton);

const registerSafeFormat = (path) => {
    try {
        const format = Quill.import(path);
        if (format) Quill.register(format, true);
    } catch (e) { console.error(`Quill Registration Error: ${path}`); }
};

registerSafeFormat('attributors/style/color');
registerSafeFormat('attributors/style/background');
registerSafeFormat('attributors/style/align');
registerSafeFormat('attributors/style/size');

const EditDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // FORM STATES
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [content, setContent] = useState('');

    // HOD SECTION STATES
    const [hodName, setHodName] = useState('');
    const [hodMessage, setHodMessage] = useState('');
    const [hodImage, setHodImage] = useState('');

    // ELIGIBILITY SECTION
    const [eligibility, setEligibility] = useState('');

    const DEFAULT_ELIGIBILITY = `
    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ccc;">
      <tr style="background: #f3f4f6;">
        <th style="border: 1px solid #ccc; padding: 10px; text-align: left;">Program</th>
        <th style="border: 1px solid #ccc; padding: 10px; text-align: left;">Eligibility Criteria</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 10px;">B.Tech</td>
        <td style="border: 1px solid #ccc; padding: 10px;">10+2 with Physics, Maths and 45% Marks</td>
      </tr>
    </table>
  `;

    useEffect(() => { fetchDepartments(); }, []);

    const fetchDepartments = async () => {
        try {
            const q = query(collection(db, "departments"), orderBy("name"));
            const querySnapshot = await getDocs(q);
            setDepartments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        } catch (error) { console.error("Error fetching departments:", error); }
    };

    // ==========================================================================
    // 2. STABLE TABLE INJECTION HANDLER
    // ==========================================================================
    const insertTable = () => {
        const tableHtml = `
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; border: 1px solid #cbd5e1;">
        <tbody>
          <tr>
            <td style="border: 1px solid #cbd5e1; padding: 12px; background: #f8fafc;"><strong>Header 1</strong></td>
            <td style="border: 1px solid #cbd5e1; padding: 12px; background: #f8fafc;"><strong>Header 2</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #cbd5e1; padding: 12px;">Row Data</td>
            <td style="border: 1px solid #cbd5e1; padding: 12px;">Row Data</td>
          </tr>
        </tbody>
      </table><p><br></p>`;

        const quill = document.querySelector('.ql-editor:focus')?.parentElement?.__quill;
        if (quill) {
            const range = quill.getSelection(true);
            quill.clipboard.dangerouslyPasteHTML(range.index, tableHtml);
        } else {
            toast.warn("Click inside a text editor first to insert a table.");
        }
    };

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
                try {
                    const toastId = toast.loading("Uploading image...");
                    const storageRef = ref(storage, `departments/content-${uuidv4()}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);
                    uploadTask.on('state_changed', null, null, async () => {
                        const url = await getDownloadURL(uploadTask.snapshot.ref);
                        toast.dismiss(toastId);
                        const quill = document.querySelector('.ql-editor:focus')?.parentElement?.__quill;
                        if (quill) {
                            const range = quill.getSelection(true);
                            quill.insertEmbed(range.index, 'image', url);
                        }
                    });
                } catch (e) { toast.error("Upload failed"); }
            }
        };
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
                ['table'],
                ['clean']
            ],
            handlers: { image: imageHandler, table: insertTable }
        },
        blotFormatter: {},
        htmlEditButton: { msg: "Edit HTML", okText: "Update", buttonHTML: "&lt;&gt;" }
    }), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name, slug: slug || name.toLowerCase().replace(/ /g, '-'),
            title, subtitle, bannerImage, content,
            hodName, hodMessage, hodImage, eligibility, updatedAt: new Date()
        };
        try {
            if (isEditing) { await updateDoc(doc(db, "departments", editId), data); toast.success("Page Updated!"); }
            else { await addDoc(collection(db, "departments"), data); toast.success("Page Created!"); }
            resetForm(); fetchDepartments();
        } catch (error) { toast.error("Error saving data."); }
    };

    const handleEdit = (dept) => {
        setName(dept.name || ''); setSlug(dept.slug || ''); setTitle(dept.title || '');
        setSubtitle(dept.subtitle || ''); setBannerImage(dept.bannerImage || '');
        setContent(dept.content || ''); setHodName(dept.hodName || '');
        setHodMessage(dept.hodMessage || ''); setHodImage(dept.hodImage || '');
        setEligibility(dept.eligibility || '');
        setEditId(dept.id); setIsEditing(true); window.scrollTo(0, 0);
    };

    const resetForm = () => {
        setIsEditing(false); setEditId(null); setName(''); setSlug(''); setTitle('');
        setSubtitle(''); setBannerImage(''); setContent(''); setHodName('');
        setHodMessage(''); setHodImage(''); setEligibility('');
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this department?")) {
            try {
                await deleteDoc(doc(db, "departments", id));
                toast.success("Deleted!");
                fetchDepartments();
            } catch (error) { toast.error("Delete failed."); }
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <style>{`
        .ql-editor table { border-collapse: collapse; width: 100%; margin: 10px 0; border: 1px solid #ccc; }
        .ql-editor td, .ql-editor th { border: 1px solid #ccc !important; padding: 12px; min-width: 50px; }
        .ql-snow.ql-toolbar button.ql-table { width: 45px !important; position: relative; }
        .ql-snow.ql-toolbar button.ql-table::after {
          content: "Table"; font-size: 11px; font-weight: bold; position: absolute; top: 4px; left: 4px; color: #444;
        }
      `}</style>

            <ToastContainer />
            <h2 style={{ marginBottom: '20px' }}>{isEditing ? `Editing: ${name}` : "Create New Department Page"}</h2>

            <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 15px rgba(0,0,0,0.1)' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <h3 style={styles.head}>1. Core Settings</h3>
                            <label style={styles.label}>Department Name (e.g. Mechanical Engineering)</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} required />
                            <label style={styles.label}>URL Slug (e.g. mechanical-engineering)</label>
                            <input type="text" value={slug} onChange={e => setSlug(e.target.value)} style={styles.input} />
                        </div>
                        <div>
                            <h3 style={styles.head}>2. Visuals</h3>
                            <ImageUpload label="Banner Image (2400x760px)" onUploadComplete={setBannerImage} />
                            {bannerImage && <img src={bannerImage} alt="Banner Preview" style={{ width: '100%', height: '80px', objectFit: 'cover', marginTop: '10px', borderRadius: '4px' }} />}
                        </div>
                    </div>

                    <div>
                        <h3 style={styles.head}>3. Main About Content</h3>
                        <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} style={{ height: '400px', marginBottom: '50px' }} />
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h3 style={styles.head}>4. HOD Section (Head of Department)</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                            <div>
                                <ImageUpload label="HOD Profile Photo" onUploadComplete={setHodImage} />
                                {hodImage && <img src={hodImage} alt="HOD" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginTop: '10px', border: '3px solid #0072C6' }} />}
                            </div>
                            <div>
                                <label style={styles.label}>HOD Full Name</label>
                                <input type="text" value={hodName} onChange={e => setHodName(e.target.value)} style={styles.input} />
                                <label style={styles.label}>Message from HOD</label>
                                <textarea value={hodMessage} onChange={e => setHodMessage(e.target.value)} style={{ ...styles.input, height: '120px' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#F0FDF4', padding: '25px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                        <h3 style={{ ...styles.head, color: '#166534' }}>5. Eligibility & Admissions</h3>
                        <button type="button" onClick={() => setEligibility(DEFAULT_ELIGIBILITY)} style={{ marginBottom: '15px', padding: '5px 12px', cursor: 'pointer' }}>Load Default Table</button>
                        <ReactQuill theme="snow" value={eligibility} onChange={setEligibility} modules={modules} style={{ height: '250px', marginBottom: '50px' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button type="submit" style={styles.saveBtn}>{isEditing ? "Update Page" : "Publish Page"}</button>
                        {isEditing && <button type="button" onClick={resetForm} style={styles.cancelBtn}>Discard Edits</button>}
                    </div>
                </form>
            </div>

            <div style={{ marginTop: '60px' }}>
                <h3 style={styles.head}>Manage Existing Pages</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {departments.map(d => (
                        <div key={d.id} style={styles.listItem}>
                            <span style={{ fontWeight: '600', fontSize: '16px' }}>{d.name}</span>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={() => handleEdit(d)} style={styles.editBtn}>Edit</button>
                                <button onClick={() => handleDelete(d.id)} style={styles.deleteBtn}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155' },
    head: { borderBottom: '2px solid #e2e8f0', color: '#0072C6', marginBottom: '20px', paddingBottom: '8px', fontWeight: '700' },
    saveBtn: { padding: '15px 35px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' },
    cancelBtn: { padding: '15px 35px', background: '#94a3b8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' },
    listItem: { padding: '18px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    editBtn: { padding: '8px 20px', background: '#e0f2fe', color: '#0369a1', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' },
    deleteBtn: { padding: '8px 20px', background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' }
};

export default EditDepartment;