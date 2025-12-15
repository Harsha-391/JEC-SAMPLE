import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';

const EditDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // --- FORM STATES ---
  const [name, setName] = useState(''); 
  const [slug, setSlug] = useState(''); 
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [bannerImage, setBannerImage] = useState(''); 

  const [about_title, setAboutTitle] = useState('');
  const [about, setAbout] = useState('');
  const [aboutImage, setAboutImage] = useState('');

  const [parallaxTitle, setParallaxTitle] = useState('');
  const [parallaxDesc, setParallaxDesc] = useState('');
  const [parallaxImage, setParallaxImage] = useState('');

  const [coreKnowledge, setCoreKnowledge] = useState('');
  const [professionalSkills, setProfessionalSkills] = useState('');
  const [advancedApplication, setAdvancedApplication] = useState('');

  const [midBannerImage, setMidBannerImage] = useState('');

  const [audienceTitle1, setAudienceTitle1] = useState('');
  const [audienceDesc1, setAudienceDesc1] = useState('');
  const [audienceTitle2, setAudienceTitle2] = useState('');
  const [audienceDesc2, setAudienceDesc2] = useState('');

  const [keySubjects, setKeySubjects] = useState('');
  const [careerProspects, setCareerProspects] = useState('');

  const [companiesImage, setCompaniesImage] = useState('');
  const [ctaImage, setCtaImage] = useState('');
  const [eligibility, setEligibility] = useState('');

  // --- FETCH & SUBMIT ---
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const q = query(collection(db, "departments"), orderBy("name"));
      const querySnapshot = await getDocs(q);
      setDepartments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // --- REMOVED VALIDATION: Nothing is mandatory now ---
    
    // Auto-generate slug if missing but name exists (Optional helper)
    let finalSlug = slug;
    if (!finalSlug && name) {
        finalSlug = name.toLowerCase().replace(/ /g, '-');
    }

    const data = {
      name, 
      slug: finalSlug, 
      title, 
      subtitle, 
      bannerImage,
      about_title, 
      about, 
      aboutImage,
      parallaxTitle, 
      parallaxDesc, 
      parallaxImage,
      coreKnowledge, 
      professionalSkills, 
      advancedApplication,
      midBannerImage,
      audienceTitle1, 
      audienceDesc1, 
      audienceTitle2, 
      audienceDesc2,
      keySubjects, 
      careerProspects,
      companiesImage, 
      ctaImage, 
      eligibility,
      updatedAt: new Date()
    };

    try {
      if (isEditing) {
        await updateDoc(doc(db, "departments", editId), data);
        toast.success("Updated (Live)");
      } else {
        await addDoc(collection(db, "departments"), data);
        toast.success("Created (Live)");
      }
      resetForm();
      fetchDepartments();
    } catch (error) {
      toast.error("Error saving.");
    }
  };

  const handleEdit = (dept) => {
    setName(dept.name || '');
    setSlug(dept.slug || '');
    setTitle(dept.title || '');
    setSubtitle(dept.subtitle || '');
    setBannerImage(dept.bannerImage || '');
    
    setAboutTitle(dept.about_title || '');
    setAbout(dept.about || '');
    setAboutImage(dept.aboutImage || '');

    setParallaxTitle(dept.parallaxTitle || '');
    setParallaxDesc(dept.parallaxDesc || '');
    setParallaxImage(dept.parallaxImage || '');

    setCoreKnowledge(dept.coreKnowledge || '');
    setProfessionalSkills(dept.professionalSkills || '');
    setAdvancedApplication(dept.advancedApplication || '');

    setMidBannerImage(dept.midBannerImage || '');
    
    setAudienceTitle1(dept.audienceTitle1 || '');
    setAudienceDesc1(dept.audienceDesc1 || '');
    setAudienceTitle2(dept.audienceTitle2 || '');
    setAudienceDesc2(dept.audienceDesc2 || '');

    setKeySubjects(dept.keySubjects || '');
    setCareerProspects(dept.careerProspects || '');

    setCompaniesImage(dept.companiesImage || '');
    setCtaImage(dept.ctaImage || '');
    setEligibility(dept.eligibility || '');

    setEditId(dept.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setIsEditing(false); setEditId(null);
    setName(''); setSlug(''); setTitle(''); setSubtitle(''); setBannerImage('');
    setAboutTitle(''); setAbout(''); setAboutImage('');
    setParallaxTitle(''); setParallaxDesc(''); setParallaxImage('');
    setCoreKnowledge(''); setProfessionalSkills(''); setAdvancedApplication('');
    setMidBannerImage(''); 
    setAudienceTitle1(''); setAudienceDesc1(''); 
    setAudienceTitle2(''); setAudienceDesc2('');
    setKeySubjects(''); setCareerProspects('');
    setCompaniesImage(''); setCtaImage(''); setEligibility('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer />
      <h2>{isEditing ? "Edit Department" : "Add Department"}</h2>
      
      <div style={{background:'white', padding:'20px', borderRadius:'10px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)'}}>
          <form onSubmit={handleSubmit} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
              
              {/* COL 1 */}
              <div>
                  <label>Department Name</label>
                  <input type="text" value={name} onChange={e=>setName(e.target.value)} style={styles.input} placeholder="Name (for admin list)" />
                  
                  <label>URL Slug (e.g. 'cse-ai')</label>
                  <input type="text" value={slug} onChange={e=>setSlug(e.target.value)} style={styles.input} placeholder="Leave empty to auto-generate from Name" />

                  <h3 style={styles.head}>Hero Section</h3>
                  <input type="text" value={title} onChange={e=>setTitle(e.target.value)} style={styles.input} placeholder="Main Title (e.g. B.Tech CSE)" />
                  <textarea value={subtitle} onChange={e=>setSubtitle(e.target.value)} style={styles.input} placeholder="Subtitle" />

                  <h3 style={styles.head}>Intro Section</h3>
                  <input type="text" value={about_title} onChange={e=>setAboutTitle(e.target.value)} style={styles.input} placeholder="Intro Heading" />
                  <label>Intro Text</label>
                  <ReactQuill theme="snow" value={about} onChange={setAbout} />

                  <h3 style={styles.head}>Parallax Section</h3>
                  <input type="text" value={parallaxTitle} onChange={e=>setParallaxTitle(e.target.value)} style={styles.input} placeholder="Parallax Heading" />
                  <label>Parallax Description</label>
                  <ReactQuill theme="snow" value={parallaxDesc} onChange={setParallaxDesc} />

                  <h3 style={styles.head}>Program Outcomes (Tabs)</h3>
                  <label>1. Core Knowledge</label>
                  <ReactQuill theme="snow" value={coreKnowledge} onChange={setCoreKnowledge} />
                  <label>2. Professional Skills</label>
                  <ReactQuill theme="snow" value={professionalSkills} onChange={setProfessionalSkills} />
                  <label>3. Advanced Application</label>
                  <ReactQuill theme="snow" value={advancedApplication} onChange={setAdvancedApplication} />
              </div>

              {/* COL 2 */}
              <div>
                   <h3 style={styles.head}>Audience Section</h3>
                   <input type="text" value={audienceTitle1} onChange={e=>setAudienceTitle1(e.target.value)} style={styles.input} placeholder="Audience 1 Title" />
                   <textarea value={audienceDesc1} onChange={e=>setAudienceDesc1(e.target.value)} style={styles.input} placeholder="Audience 1 Desc" />
                   
                   <input type="text" value={audienceTitle2} onChange={e=>setAudienceTitle2(e.target.value)} style={styles.input} placeholder="Audience 2 Title" />
                   <textarea value={audienceDesc2} onChange={e=>setAudienceDesc2(e.target.value)} style={styles.input} placeholder="Audience 2 Desc" />

                   <h3 style={styles.head}>Pills</h3>
                   <label>Key Subjects (comma separated)</label>
                   <textarea value={keySubjects} onChange={e=>setKeySubjects(e.target.value)} style={styles.input} />

                   <label>Career Prospects (comma separated)</label>
                   <textarea value={careerProspects} onChange={e=>setCareerProspects(e.target.value)} style={styles.input} />

                   <h3 style={styles.head}>Images</h3>
                   <ImageUpload label="Hero Background" onUploadComplete={setBannerImage} />
                   {bannerImage && <small style={{color:'green'}}>✓ Uploaded</small>}
                   <div style={{margin:'10px 0'}}></div>

                   <ImageUpload label="Intro Side Image" onUploadComplete={setAboutImage} />
                   {aboutImage && <small style={{color:'green'}}>✓ Uploaded</small>}
                   <div style={{margin:'10px 0'}}></div>

                   <ImageUpload label="Parallax Background" onUploadComplete={setParallaxImage} />
                   {parallaxImage && <small style={{color:'green'}}>✓ Uploaded</small>}
                   <div style={{margin:'10px 0'}}></div>

                   <ImageUpload label="Mid Page Banner" onUploadComplete={setMidBannerImage} />
                   {midBannerImage && <small style={{color:'green'}}>✓ Uploaded</small>}
                   <div style={{margin:'10px 0'}}></div>

                   <ImageUpload label="Companies Cloud" onUploadComplete={setCompaniesImage} />
                   {companiesImage && <small style={{color:'green'}}>✓ Uploaded</small>}
                   <div style={{margin:'10px 0'}}></div>

                   <ImageUpload label="CTA Side Image" onUploadComplete={setCtaImage} />
                   {ctaImage && <small style={{color:'green'}}>✓ Uploaded</small>}

                   <h3 style={styles.head}>Eligibility</h3>
                   <ReactQuill theme="snow" value={eligibility} onChange={setEligibility} />
                   
                   <button type="submit" style={styles.saveBtn}>{isEditing ? "Update Department" : "Create Department"}</button>
              </div>
          </form>
      </div>
      
      <div style={{marginTop:'50px'}}>
          {departments.map(d => (
              <div key={d.id} style={{padding:'10px', borderBottom:'1px solid #ccc', display:'flex', justifyContent:'space-between'}}>
                  <span>{d.name || "(No Name)"} / {d.slug || "(No Slug)"}</span>
                  <button onClick={() => handleEdit(d)} style={{cursor:'pointer', padding:'5px 10px'}}>Edit</button>
              </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
    input: { width:'100%', padding:'8px', marginBottom:'10px', borderRadius:'4px', border:'1px solid #ddd' },
    head: { marginTop:'20px', borderBottom:'2px solid #eee', paddingBottom:'5px', color:'#0072C6' },
    saveBtn: { width:'100%', padding:'15px', background:'#0072C6', color:'white', border:'none', borderRadius:'5px', marginTop:'20px', cursor:'pointer', fontSize:'16px' }
};

export default EditDepartment;