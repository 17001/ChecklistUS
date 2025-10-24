// Define procedures for each body region
const procedures = {
  neck: [
    { name: "Central Venous Catheter (IJ)", key: "central_line" },
  ],
  thorax: [
    { name: "Thoracentesis", key: "thoracentesis" },
    { name: "Chest Tube", key: "chest_tube" },
    { name: "Pericardiocentesis", key: "pericardiocentesis" }
  ],
  abdomen: [
    { name: "Paracentesis", key: "paracentesis" },
  ],
  upper_extremity: [
    { name: "Joint Aspiration", key: "joint_aspiration" },
    { name: "Abscess Drainage", key: "abscess_drainage" }
  ],
  lower_extremity: [
    { name: "Knee Aspiration", key: "knee_aspiration" },
    { name: "Abscess Drainage", key: "abscess_drainage" }
  ]
};

// Checklist content for each procedure
const checklists = {
  central_line: `<h3>Central Venous Catheter (IJ)</h3>
<ul>
<li>Confirm indication and consent</li>
<li>Trendelenburg position</li>
<li>Identify IJV with US</li>
<li>Sterile technique</li>
<li>Needle under US guidance</li>
<li>Confirm flash, insert wire, catheter</li>
<li>Check placement (US or CXR)</li>
</ul><strong>Complications:</strong> Pneumothorax, arterial puncture, hematoma`,

  femoral_nerve_block: `<h3>Femoral Nerve Block</h3>
<ul>
<li>Identify femoral nerve and vessels under US</li>
<li>Needle lateral to artery, in-plane</li>
<li>Inject local anesthetic incrementally</li>
<li>Observe circumferential spread</li>
</ul><strong>Complications:</strong> Vascular puncture, intravascular injection`,

  thoracentesis: `<h3>Thoracentesis</h3>
<ul>
<li>Confirm effusion with US</li>
<li>Upright or lateral decubitus</li>
<li>Sterile prep, local anesthesia</li>
<li>Insert needle above rib under US</li>
<li>Withdraw fluid, monitor patient</li>
<li>Check lung sliding post-procedure</li>
</ul><strong>Complications:</strong> Pneumothorax, bleeding`,

  chest_tube: `<h3>Chest Tube</h3>
<ul>
<li>Identify safe site with US</li>
<li>Sterile prep, local anesthesia</li>
<li>Incision and blunt dissection</li>
<li>Insert tube, connect to drainage</li>
<li>Confirm placement (US or CXR)</li>
</ul><strong>Complications:</strong> Malposition, bleeding, infection`,

  pericardiocentesis: `<h3>Pericardiocentesis</h3>
<ul>
<li>Confirm effusion with US</li>
<li>Monitor vitals</li>
<li>Insert needle under US guidance</li>
<li>Aspirate fluid until stable</li>
<li>Pigtail drain if needed</li>
</ul><strong>Complications:</strong> Myocardial injury, arrhythmia`,

  paracentesis: `<h3>Paracentesis</h3>
<ul>
<li>Identify ascites with US</li>
<li>Supine, head slightly elevated</li>
<li>Sterile prep, local anesthetic</li>
<li>Insert needle under US</li>
<li>Withdraw fluid, monitor patient</li>
</ul><strong>Complications:</strong> Hypotension, bowel perforation`,

  fast: `<h3>FAST Scan</h3>
<ul>
<li>RUQ, LUQ, pelvis, subxiphoid views</li>
<li>Identify free fluid</li>
<li>Correlate with vitals</li>
<li>Guide interventions if needed</li>
</ul><strong>Complications:</strong> Misinterpretation, missed injuries`,

  joint_aspiration: `<h3>Joint Aspiration</h3>
<ul>
<li>Identify effusion with US</li>
<li>Sterile prep, local anesthesia</li>
<li>Insert needle under US guidance</li>
<li>Aspirate fluid</li>
</ul><strong>Complications:</strong> Bleeding, infection, cartilage injury`,

  abscess_drainage: `<h3>Abscess Drainage</h3>
<ul>
<li>Confirm abscess vs cellulitis with US</li>
<li>Sterile prep, local anesthesia</li>
<li>Incision and drain under US guidance</li>
<li>Check with US for residual fluid</li>
</ul><strong>Complications:</strong> Incomplete drainage, bleeding`,

  knee_aspiration: `<h3>Knee Aspiration</h3>
<ul>
<li>Identify effusion with US</li>
<li>Sterile prep, local anesthesia</li>
<li>Insert needle under US guidance</li>
<li>Aspirate fluid</li>
</ul><strong>Complications:</strong> Bleeding, infection`
};

// Function to show procedures when a region is clicked
function selectRegion(region) {
  const procedureListDiv = document.getElementById("procedure-list");
  procedureListDiv.innerHTML = "<strong>Select a procedure:</strong><br>";

  procedures[region].forEach(proc => {
    const btn = document.createElement("button");
    btn.textContent = proc.name;
    btn.onclick = () => showChecklist(proc.key);
    procedureListDiv.appendChild(btn);
  });

  document.getElementById("output").innerHTML = "";
}

// Function to display checklist for a selected procedure
function showChecklist(procedureKey) {
  document.getElementById("output").innerHTML = checklists[procedureKey];
}
