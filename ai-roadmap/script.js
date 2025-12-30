const STORAGE_KEY = 'ai-roadmap-progress-v1'

const roadmapData = [
  {
    id: 'p1',
    title: '📘 1. Programming (Python)',
    goal: 'Build strong coding foundation.',
    checklist: [
      'Learn Python basics (variables, loops, conditions)',
      'Learn functions & modules',
      'Learn Lists, Dictionaries, Sets',
      'Learn OOP basics',
      'Practice writing 10 small programs',
      'Solve 10 easy coding problems Daily'
    ],
    resources: [
      {title: 'FreeCodeCamp Python', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw'},
      {title: 'W3Schools Python', url: 'https://www.w3schools.com/python/'},
      {title: 'Python Exercises', url: 'https://www.hackerrank.com/domains/python'}
    ]
  },
  {
    id: 'p2',
    title: '📊 2. Math for AI',
    goal: 'Build math intuition.',
    checklist: [
      'Learn Linear Algebra basics (vectors, matrices)',
      'Learn Calculus basics (gradient, derivatives)',
      'Learn Probability (mean, variance, distributions)',
      'Learn Discrete Math (logic, sets)'
    ],
    resources: [
      {title:'3Blue1Brown', url:'https://www.youtube.com/@3blue1brown'},
      {title:'Khan Academy Math', url:'https://www.khanacademy.org/math'}
    ]
  },
  {
    id: 'p3',
    title: '🧰 3. Git & GitHub',
    goal: 'Track your work and build credibility.',
    checklist: ['Install Git','Create GitHub account','Push first project to GitHub','Learn commit / push / branch','Create README for projects'],
    resources: [{title:'Git Crash Course',url:'https://www.youtube.com/watch?v=q8EevlEpQ2A&pp=ygUUY2hhaSBhdXIgY29kZSBnaXRodWI%3D'},{title:'GitHub Docs',url:'https://docs.github.com/'}]
  },
  {
    id: 'p4',
    title: '⚙️ 4. Basic DSA',
    goal: 'Improve problem-solving.',
    checklist: ['Arrays','Strings','Linked List','Stack','Queue','Trees (intro)','Solve 30 beginner problems'],
    resources: [{title:'Take U Forward',url:'https://www.youtube.com/c/TakeUForward'},{title:'Abdul Bari DSA',url:'https://www.youtube.com/user/abdulbarikcs'}]
  },
  {
    id: 'p5',
    title: '📂 5. Data Handling',
    goal: 'Learn how to work with real data.',
    checklist: ['Learn NumPy','Learn Pandas','Data cleaning basics','Data visualization basics'],
    resources: [{title:'Kaggle Pandas Course',url:'https://www.kaggle.com/learn/pandas'},{title:'Kaggle NumPy Course',url:'https://www.kaggle.com/learn/numpy'}]
  },
  {
    id: 'p6',
    title: '🧠 6. Machine Learning Basics',
    goal: 'Understand ML fundamentals.',
    checklist: ['Regression','Classification','Train/Test split','Evaluation metrics','Build first ML model (Iris/Titanic)'],
    resources: [{title:'Andrew Ng ML Course',url:'https://www.coursera.org/learn/machine-learning'},{title:'Scikit-learn Guide',url:'https://scikit-learn.org/stable/tutorial/index.html'}]
  },
  {
    id: 'p7',
    title: '🤖 7. Deep Learning',
    goal: 'Learn how neural networks work.',
    checklist: ['Neural networks basics','Loss & activation functions','CNN basics','Pick framework: PyTorch or TensorFlow','Train a simple neural network'],
    resources: [{title:'PyTorch Tutorials',url:'https://pytorch.org/tutorials/'},{title:'TensorFlow Tutorials',url:'https://www.tensorflow.org/learn'}]
  },
  {
    id: 'p8',
    title: '✨ 8. GenAI & LLMs',
    goal: 'Master modern AI engineering.',
    checklist: [],
    subtopics: [
      {title:'8.1 Prompt Engineering', checklist:['Zero-shot','Few-shot','Role prompting','Chain-of-thought','Output formatting'], resources:[{title:'Prompt Engineering Guide',url:'https://www.promptingguide.ai/'}]},
      {title:'8.2 Embeddings', checklist:['What embeddings are','Text similarity','Chunking basics','Try embedding models'], resources:[{title:'OpenAI Embeddings',url:'https://platform.openai.com/docs/guides/embeddings'},{title:'SentenceTransformers',url:'https://www.sbert.net/'}]},
      {title:'8.3 Vector Databases', checklist:['Learn vector search','Indexing','Metadata filtering','Add to a RAG pipeline'], resources:[{title:'Pinecone',url:'https://docs.pinecone.io/'},{title:'ChromaDB',url:'https://docs.trychroma.com/'}]},
      {title:'8.4 RAG (Retrieval Augmented Generation)', checklist:['Chunk text','Store embeddings','Retrieve info','Pass to LLM','Build simple RAG app'], resources:[{title:'LangChain',url:'https://python.langchain.com/'},{title:'LlamaIndex',url:'https://docs.llamaindex.ai/'}]},
      {title:'8.5 LLM Architecture Basics', checklist:['Transformers','Attention mechanism','Encoder/Decoder','Mixture of Experts (MoE)'], resources:[{title:'Illustrated Transformer',url:'https://jalammar.github.io/illustrated-transformer/'}]},
      {title:'8.6 Fine-Tuning', checklist:['LoRA','QLoRA','Dataset prep','Fine-tune a small model'], resources:[{title:'HuggingFace Fine-Tuning',url:'https://huggingface.co/docs/transformers/training'}]},
      {title:'8.7 AI Agents', checklist:['Tools','Memory','Planning','Multi-agent systems'], resources:[{title:'LangChain Agents',url:'https://python.langchain.com/docs/modules/agents/'},{title:'CrewAI',url:'https://www.crewai.com/'}]},
      {title:'8.8 MCP Servers (Modern AI Tools)', checklist:['What MCP is','Run local MCP server','Connect tools to LLM'], resources:[{title:'OpenAI MCP',url:'https://platform.openai.com/mcp'}]}
    ]
  },
  {
    id: 'p9',
    title: '🛠️ 9. Deployment + Cloud',
    goal: 'Deploy one AI app and learn cloud basics.',
    checklist: ['Streamlit','FastAPI','Docker','Cloud basics (AWS/GCP/Azure)','Deploy one AI app'],
    resources: [{title:'Streamlit',url:'https://streamlit.io/'},{title:'FastAPI',url:'https://fastapi.tiangolo.com/'},{title:'Docker',url:'https://docs.docker.com/'}]
  },
  {
    id: 'p10',
    title: '🚀 10. Portfolio + Resume + Internships',
    goal: 'Showcase work and apply widely.',
    checklist: ['Build 3–5 projects','Create GitHub portfolio','Create Notion/Carrd portfolio','Make 1-page resume','Apply to 10 internships weekly'],
    resources: [{title:'Internshala',url:'https://internshala.com/'},{title:'LinkedIn Jobs',url:'https://www.linkedin.com/jobs/'}]
  }
]

// Load or init state
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY)
  if(!raw) return {}
  try{ return JSON.parse(raw) }catch(e){return {}}
}
function saveState(s){ localStorage.setItem(STORAGE_KEY, JSON.stringify(s)) }

const state = loadState()

function render(){
  const root = document.getElementById('roadmap')
  root.innerHTML = ''

  // Helper to render a checklist block with heading "Checklist" and checkboxes
  function renderChecklist(parent, items, prefix){
    const h = document.createElement('h3'); h.textContent = 'Checklist'; parent.appendChild(h)
    const ul = document.createElement('ul'); ul.className = 'checklist'
    items.forEach(it => {
      const id = prefix + '::' + it
      const li = document.createElement('li')
      const cb = document.createElement('input'); cb.type='checkbox'; cb.className='chk'; cb.id = id
      if(state[id]) cb.checked = true
      cb.addEventListener('change', ()=>{
        state[id] = cb.checked
        saveState(state)
        updateAllProgress()
      })
      const label = document.createElement('label'); label.htmlFor = id; label.textContent = it
      li.appendChild(cb); li.appendChild(label)
      ul.appendChild(li)
    })
    parent.appendChild(ul)
  }

  // Render each top-level section
  roadmapData.forEach(section => {
    const sec = document.createElement('section'); sec.className='section'; sec.id = section.id
    const h2 = document.createElement('h2'); h2.textContent = section.title; sec.appendChild(h2)
    const g = document.createElement('div'); g.className='goal'; g.textContent = 'Goal: ' + (section.goal || '')
    sec.appendChild(g)

    if(section.checklist && section.checklist.length){
      renderChecklist(sec, section.checklist, section.id)
    }

    // render subtopics (for GenAI etc.)
    if(section.subtopics){
      section.subtopics.forEach(st=>{
        const sh = document.createElement('h3'); sh.textContent = st.title; sec.appendChild(sh)
        if(st.checklist && st.checklist.length) renderChecklist(sec, st.checklist, section.id + '::' + st.title)
        if(st.resources && st.resources.length){
          const rdiv = document.createElement('div'); rdiv.className='resources'; rdiv.innerHTML = st.resources.map(rr=>`<a href="${rr.url}" target="_blank" rel="noopener">${rr.title}</a>`).join(' • ')
          sec.appendChild(rdiv)
        }
      })
    }

    if(section.resources && section.resources.length){
      const r = document.createElement('div'); r.className='resources'; r.innerHTML = section.resources.map(rr=>`<a href="${rr.url}" target="_blank" rel="noopener">${rr.title}</a>`).join(' • ')
      sec.appendChild(r)
    }

    // add small per-section progress bar + percent
    const sectionItems = []
    if(section.checklist) section.checklist.forEach(i=>sectionItems.push(section.id+'::'+i))
    if(section.subtopics) section.subtopics.forEach(st=>st.checklist.forEach(i=>sectionItems.push(section.id+'::'+st.title+'::'+i)))
    const completed = sectionItems.reduce((acc,id)=> acc + (state[id]?1:0), 0)
    const pct = sectionItems.length? Math.round((completed/sectionItems.length)*100):0

    const meta = document.createElement('div'); meta.className='section-meta'
    const small = document.createElement('div'); small.className='small-bar'
    const smallFill = document.createElement('div'); smallFill.className='small-fill'; smallFill.id = section.id + '-fill'
    small.appendChild(smallFill)
    const pctSpan = document.createElement('div'); pctSpan.className='section-percent'; pctSpan.id = section.id + '-pct'; pctSpan.textContent = sectionItems.length? (pct + '%') : ''
    meta.appendChild(small); meta.appendChild(pctSpan)
    sec.appendChild(meta)

    // set initial small fill
    smallFill.style.width = pct + '%'

    root.appendChild(sec)
  })

  // Projects table (static rendering to match template)
  const projects = document.createElement('section'); projects.className='section projects'
  const ph = document.createElement('h2'); ph.textContent = 'Project Ideas'; projects.appendChild(ph)
  const table = document.createElement('table')
  table.innerHTML = `
    <thead><tr><th>Project Name</th><th>Level</th><th>How to Do It (Short)</th><th>Tools to Use</th></tr></thead>
    <tbody>
      <tr><td>PDF → Q&A Bot</td><td>Beginner</td><td>Upload PDF → split text → ask questions</td><td>Python, LangChain, OpenAI API, Streamlit</td></tr>
      <tr><td>Chatbot With Memory</td><td>Beginner</td><td>Save chat history → send with every prompt</td><td>Python, OpenAI API, Streamlit</td></tr>
      <tr><td>Image Classifier</td><td>Beginner</td><td>Train small CNN on a dataset</td><td>TensorFlow/Keras or PyTorch</td></tr>
      <tr><td>Movie Recommendation System</td><td>Beginner</td><td>Use similarity between movie descriptions</td><td>Pandas, Scikit-Learn</td></tr>
      <tr><td>Text Summarizer</td><td>Beginner</td><td>Send text → get short summary using API</td><td>OpenAI/Gemini API, Python, Streamlit</td></tr>
      <tr><td>AI Resume Analyzer</td><td>Intermediate</td><td>Upload resume → score + suggestions</td><td>OpenAI API, FastAPI, Vercel/Streamlit</td></tr>
      <tr><td>AI Study Assistant</td><td>Intermediate</td><td>PDF → chunk → embeddings → ask anything</td><td>LangChain, ChromaDB, OpenAI API</td></tr>
      <tr><td>Sentiment Analysis Dashboard</td><td>Intermediate</td><td>Classify tweets/reviews → show dashboard</td><td>Scikit-Learn, Pandas, Streamlit</td></tr>
      <tr><td>Voice-to-Text Note Maker</td><td>Intermediate</td><td>Convert voice → text → summarize</td><td>OpenAI Whisper, Python, Streamlit</td></tr>
      <tr><td>Product Search Engine</td><td>Intermediate</td><td>Create embeddings → search similar items</td><td>SentenceTransformers, ChromaDB</td></tr>
      <tr><td>Full RAG System</td><td>Advanced</td><td>Scrape site → store embeddings → ask questions</td><td>LangChain, Pinecone/Chroma, FastAPI</td></tr>
      <tr><td>Fine-Tuned Chatbot (LoRA)</td><td>Advanced</td><td>Collect data → clean → fine-tune model</td><td>HuggingFace, QLoRA, Colab</td></tr>
      <tr><td>Multi-Agent Workflow</td><td>Advanced</td><td>Create agents → assign roles → let them cooperate</td><td>CrewAI / LangChain Agents</td></tr>
      <tr><td>AI Business Automation Bot</td><td>Advanced</td><td>Auto email reply → auto tasks → auto reports</td><td>OpenAI API, LangChain, Zapier</td></tr>
      <tr><td>Personal AI Assistant (MCP)</td><td>Advanced</td><td>Connect tools → browser → python using MCP servers</td><td>OpenAI MCP, LangChain, FastAPI</td></tr>
    </tbody>
  `
  projects.appendChild(table)
  root.appendChild(projects)

  // Final section: Portfolio / Tracker
  const final = document.createElement('section'); final.className='section';
  const fh = document.createElement('h2'); fh.textContent = '🚀 10. Portfolio + Resume + Internships'; final.appendChild(fh)
  const fg = document.createElement('div'); fg.className='goal'; fg.textContent = 'Goal: Showcase work and apply widely.'; final.appendChild(fg)
  renderChecklist(final, ['Build 3–5 projects','Create GitHub portfolio','Create Notion/Carrd portfolio','Make 1-page resume','Apply to 10 internships weekly'], 'final')
  root.appendChild(final)

  // Progress tracker
  const tracker = document.createElement('section'); tracker.className='section';
  const th = document.createElement('h2'); th.textContent = '🌟 FINAL SECTION: Progress Tracker'; tracker.appendChild(th)
  const tw = document.createElement('div'); tw.className='goal'; tw.textContent = 'Weekly Goals'; tracker.appendChild(tw)
  renderChecklist(tracker, ['Learn','Practice','Build','Deploy','Share on LinkedIn/Instagram'], 'weekly')
  root.appendChild(tracker)

  // update overall progress display
  updateAllProgress()
}

function updateAllProgress(){
  // update each card's local progress helper
  document.querySelectorAll('.card').forEach(card=>{
    if(card.__setSectionProgress) card.__setSectionProgress()
  })
  // update overall
  let total=0, done=0
  roadmapData.forEach(section=>{
    const items = []
    if(section.checklist) items.push(...section.checklist.map(i=>section.id+'::'+i))
    if(section.subtopics) section.subtopics.forEach(st=>st.checklist.forEach(i=>items.push(section.id+'::'+st.title+'::'+i)))
    total += items.length
    items.forEach(id=>{ if(state[id]) done++ })
  })
  const overall = document.getElementById('overallProgress')
  const pct = total? Math.round((done/total)*100):0
  overall.style.width = pct + '%'
  const overallPctEl = document.getElementById('overallPercent')
  if(overallPctEl) overallPctEl.textContent = pct + '%'

  // update per-section percent bars/texts
  roadmapData.forEach(section=>{
    const ids = []
    if(section.checklist) section.checklist.forEach(i=>ids.push(section.id+'::'+i))
    if(section.subtopics) section.subtopics.forEach(st=>st.checklist.forEach(i=>ids.push(section.id+'::'+st.title+'::'+i)))
    const totalItems = ids.length
    const completedItems = ids.reduce((acc,id)=> acc + (state[id]?1:0), 0)
    const p = totalItems? Math.round((completedItems/totalItems)*100):0
    const fillEl = document.getElementById(section.id + '-fill')
    const pctEl = document.getElementById(section.id + '-pct')
    if(fillEl) fillEl.style.width = p + '%'
    if(pctEl) pctEl.textContent = totalItems? (p + '%') : ''
  })
}

// safe DOM bindings (search/reset may be absent)
document.addEventListener('DOMContentLoaded', ()=>{
  const searchEl = document.getElementById('search')
  if(searchEl){
    searchEl.addEventListener('input', e=>{
      const q = e.target.value.toLowerCase().trim()
      document.querySelectorAll('.section').forEach(sec=>{
        const text = sec.innerText.toLowerCase()
        sec.style.display = text.includes(q)? '' : 'none'
      })
    })
  }

  const resetEl = document.getElementById('reset')
  if(resetEl){
    resetEl.addEventListener('click', ()=>{
      if(!confirm('Reset all saved checkpoint progress?')) return
      localStorage.removeItem(STORAGE_KEY)
      Object.keys(state).forEach(k=>delete state[k])
      location.reload()
    })
  }

  render()
})
