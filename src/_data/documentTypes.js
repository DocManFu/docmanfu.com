// Programmatic SEO: one landing page per document type at /documents/<slug>/.
// Keep every claim grounded in real DocManFu features (see /features/).
export default [
  {
    slug: "bills",
    name: "Bills",
    keyword: "bill organizer",
    title: "Self-Hosted Bill Organizer and Tracker",
    description: "Organize paper and PDF bills in a private, self-hosted archive. DocManFu scans with OCR, tracks amounts, due dates, and paid status, and flags overdue bills.",
    headline: "Know which bills are due without handing your finances to another app.",
    intro: "Utility bills, credit card statements, medical invoices, and subscription notices arrive by mail and by email. DocManFu gives each bill a searchable home and keeps the amount, due date, and payment status right beside the document.",
    pains: [
      "Paper bills pile up and PDFs scatter across downloads folders",
      "It is hard to prove what you paid and when",
      "Budgeting apps want bank credentials just to show a due date"
    ],
    features: [
      { title: "Bill tracking built in", text: "Record amount, due date, and paid, unpaid, or dismissed status. Overdue bills are clearly marked in the list." },
      { title: "AI can read the details", text: "With an AI provider enabled, DocManFu can classify bills and suggest names, tags, and metadata such as vendor and amount." },
      { title: "Search the fine print", text: "OCR makes scanned bills searchable, so an account number or vendor name is enough to find the right statement." }
    ],
    tips: [
      "Scan paper bills the day they arrive, then shred the originals you do not legally need",
      "Tag by household category such as utilities, insurance, or medical",
      "Mark bills paid as you pay them so the overdue list stays trustworthy"
    ],
    faqs: [
      { q: "Does DocManFu pay my bills?", a: "No. DocManFu does not connect to bank accounts or payment services. It stores the bill and tracks its amount, due date, and status so you always know what is outstanding." },
      { q: "Can I track bills without AI?", a: "Yes. You can enter bill details yourself. AI only speeds up classification and metadata suggestions." }
    ]
  },
  {
    slug: "tax-documents",
    name: "Tax documents",
    keyword: "tax document organizer",
    title: "Private Tax Document Organizer",
    description: "Keep W-2s, 1099s, receipts, and tax returns in a private, searchable, self-hosted archive with OCR, tags, and optional local AI.",
    headline: "Tax season is easier when every form is already searchable.",
    intro: "Tax forms contain some of the most sensitive information you own: income, identification numbers, and addresses. DocManFu keeps them on hardware you control and makes years of forms retrievable in seconds.",
    pains: [
      "Forms arrive from employers, banks, and brokers in different formats",
      "Finding last year's return or a specific 1099 takes a scavenger hunt",
      "Uploading tax records to a cloud service is a privacy risk"
    ],
    features: [
      { title: "Classify tax forms", text: "AI analysis can recognize tax forms and suggest a clear name and tags, such as the tax year and issuer." },
      { title: "Keep AI local", text: "Use Ollama to run compatible models on your own hardware, or disable AI and rely on OCR and manual tags." },
      { title: "Search across years", text: "Full-text search finds an employer name, account number, or form type across every year in the archive." }
    ],
    tips: [
      "Create a tag for each tax year and apply it as forms arrive",
      "Store the filed return alongside its supporting documents",
      "Back up the archive before you shred anything"
    ],
    faqs: [
      { q: "Is DocManFu tax software?", a: "No. It does not prepare or file returns. It stores and organizes the documents you or your preparer need." },
      { q: "Do my tax documents leave my network?", a: "Not unless you choose a cloud AI provider. OCR runs locally, and you can use local Ollama models or no AI at all." }
    ]
  },
  {
    slug: "medical-records",
    name: "Medical records",
    keyword: "medical records organizer",
    title: "Private Medical Records Organizer",
    description: "Store lab results, visit summaries, prescriptions, and medical bills in a self-hosted archive with OCR search and optional local AI.",
    headline: "Your health history, searchable and private.",
    intro: "Lab reports, visit summaries, immunization records, and explanation-of-benefits statements come from many providers and portals. DocManFu brings them into one private archive so you can find a result or a bill when it matters.",
    pains: [
      "Every provider has a different patient portal",
      "Records you need at an appointment are buried in email",
      "Health data is exactly what you do not want on another cloud service"
    ],
    features: [
      { title: "One place for every provider", text: "Upload PDFs and images from any portal, scan paper records, and tag them by family member, provider, or condition." },
      { title: "Private by design", text: "Documents stay on storage you choose. OCR runs locally, and AI can run locally with Ollama or be switched off." },
      { title: "Track medical bills too", text: "Medical invoices can use bill tracking, so amounts, due dates, and paid status sit beside the related records." }
    ],
    tips: [
      "Tag documents by family member so each person's history is one filter away",
      "Download visit summaries from portals regularly; portals change",
      "Keep insurance explanation-of-benefits statements next to the matching bills"
    ],
    faqs: [
      { q: "Is DocManFu HIPAA compliant?", a: "DocManFu is personal self-hosted software, not a covered healthcare service. Compliance depends on how and where you deploy it. It is designed for individuals and households managing their own records." },
      { q: "Can multiple family members use it?", a: "Yes. DocManFu supports multiple accounts with admin and user roles and per-user document ownership." }
    ]
  },
  {
    slug: "receipts",
    name: "Receipts",
    keyword: "receipt organizer",
    title: "Self-Hosted Receipt Organizer",
    description: "Scan and organize receipts in a private, searchable archive. DocManFu OCRs photos and PDFs so you can find any purchase by store, item, or amount.",
    headline: "Stop keeping receipts in a shoebox.",
    intro: "Receipts fade, get lost, and are always needed at the worst time: returns, warranty claims, expense reports, and taxes. Photograph or scan them into DocManFu and they become searchable text.",
    pains: [
      "Thermal paper receipts fade within months",
      "Email receipts are scattered across inboxes",
      "Finding proof of purchase for a warranty claim is painful"
    ],
    features: [
      { title: "OCR for photos and scans", text: "JPG, PNG, TIFF, WebP, and PDF receipts are processed with Tesseract so store names and totals become searchable." },
      { title: "Scanner folder automation", text: "Point a scanner at a folder and the DocManFu CLI watcher uploads new files automatically." },
      { title: "Tags for anything", text: "Tag receipts as business, household, returnable, or warranty and filter instantly." }
    ],
    tips: [
      "Scan thermal receipts quickly before they fade",
      "Tag big purchases with 'warranty' so they are easy to find later",
      "Save email receipts as PDF and drop them into the upload page"
    ],
    faqs: [
      { q: "Can I upload receipts from my phone?", a: "Yes. DocManFu's web interface works in mobile browsers, so you can upload photos of receipts directly." },
      { q: "Does it extract line items?", a: "OCR makes the full receipt text searchable. AI analysis can suggest names, tags, and metadata, but DocManFu is not an expense-report tool." }
    ]
  },
  {
    slug: "insurance-documents",
    name: "Insurance documents",
    keyword: "insurance document organizer",
    title: "Insurance Policy and Document Organizer",
    description: "Keep home, auto, health, and life insurance policies, claims, and statements in one private, searchable, self-hosted archive.",
    headline: "Find the policy number before you need to file the claim.",
    intro: "Insurance paperwork is long, dense, and only important on your worst days. DocManFu makes declarations pages, policy documents, and claim correspondence searchable so you can act quickly.",
    pains: [
      "Policy renewals arrive every year with small, important changes",
      "Claim correspondence gets split across mail and email",
      "You cannot remember which carrier covers what"
    ],
    features: [
      { title: "Search policy language", text: "OCR turns long policy PDFs into searchable text, so you can find a coverage term or deductible quickly." },
      { title: "Automatic classification", text: "AI analysis can recognize insurance documents and suggest names and tags." },
      { title: "Premium bills tracked", text: "Premium notices can use bill tracking so renewals and due dates do not slip." }
    ],
    tips: [
      "Tag by policy type: home, auto, health, life, umbrella",
      "Keep each year's declarations page to compare renewals",
      "Store photos of valuables alongside your homeowners policy"
    ],
    faqs: [
      { q: "Can I get to my policies during an emergency?", a: "If you expose DocManFu securely over HTTPS or a VPN, you can reach your archive from any browser. Keep an offline backup as well." },
      { q: "Can I share policies with my spouse?", a: "DocManFu supports multiple user accounts with roles. Documents are owned per user." }
    ]
  },
  {
    slug: "bank-statements",
    name: "Bank statements",
    keyword: "bank statement organizer",
    title: "Private Bank Statement Archive",
    description: "Archive bank, credit card, and brokerage statements privately. DocManFu makes years of statements searchable without connecting to your bank.",
    headline: "Years of statements, one search box, zero bank logins.",
    intro: "Banks only keep statements online for a limited time, and closed accounts disappear entirely. DocManFu keeps a permanent, searchable copy on storage you control.",
    pains: [
      "Online statement history is limited and disappears when accounts close",
      "Loan and mortgage applications ask for months of statements",
      "Aggregator apps require handing over your bank credentials"
    ],
    features: [
      { title: "No bank connection required", text: "DocManFu works with downloaded PDFs. It never asks for bank credentials." },
      { title: "Search every statement", text: "Find a transaction description or account number across years of statements with full-text search." },
      { title: "Consistent names", text: "AI analysis can suggest consistent names such as institution and statement month, so your archive stays tidy." }
    ],
    tips: [
      "Download statements monthly or quarterly and upload them in batches",
      "Tag by institution and account type",
      "Keep statements for closed accounts; they are hard to recover later"
    ],
    faqs: [
      { q: "Does DocManFu analyze my spending?", a: "No. It is a document archive, not a budgeting tool. It makes statements easy to store and find." },
      { q: "Can I upload many statements at once?", a: "Yes. Drag and drop multiple files and they are processed in the background." }
    ]
  },
  {
    slug: "warranties-and-manuals",
    name: "Warranties and manuals",
    keyword: "warranty and manual organizer",
    title: "Warranty and Product Manual Organizer",
    description: "Keep product manuals, warranties, and proof of purchase together in a searchable, self-hosted archive with OCR and tags.",
    headline: "The manual for the dishwasher is one search away.",
    intro: "Appliances, electronics, and tools each come with a manual, a warranty card, and a receipt. DocManFu keeps them together and searchable, so troubleshooting and warranty claims take minutes.",
    pains: [
      "Paper manuals fill a drawer nobody wants to dig through",
      "Warranty claims need a receipt you cannot find",
      "Model numbers are printed in tiny text on the back of the appliance"
    ],
    features: [
      { title: "Search by model number", text: "OCR makes manuals and warranty cards searchable, including model and serial numbers." },
      { title: "Group with tags", text: "Tag the manual, warranty, and receipt with the same product or room tag to keep them together." },
      { title: "Preview in the browser", text: "Read a manual right in DocManFu's built-in PDF preview, on any device." }
    ],
    tips: [
      "Download the manufacturer PDF manual instead of scanning the paper copy",
      "Photograph the model and serial number label when you install something",
      "Tag everything for one appliance with a shared tag"
    ],
    faqs: [
      { q: "Will DocManFu remind me when a warranty expires?", a: "Not today. You can record warranty details in tags and metadata and search for them." },
      { q: "Can I store very large manuals?", a: "Yes. PDFs are stored as files on your own storage, so capacity depends on your hardware." }
    ]
  },
  {
    slug: "pay-stubs",
    name: "Pay stubs",
    keyword: "pay stub organizer",
    title: "Pay Stub and Employment Records Organizer",
    description: "Archive pay stubs, offer letters, and benefits paperwork privately with DocManFu's OCR search and self-hosted storage.",
    headline: "Proof of income, ready when the lender asks.",
    intro: "Pay stubs, W-2s, offer letters, and benefits elections are needed for loans, rentals, and taxes, and often vanish when you change jobs. DocManFu keeps a permanent private copy.",
    pains: [
      "Payroll portals lock you out after you leave a job",
      "Lenders and landlords ask for recent pay stubs on short notice",
      "Employment records span decades and many employers"
    ],
    features: [
      { title: "Keep records after you leave", text: "Download stubs and benefits documents while you still have access and keep them on your own storage." },
      { title: "Search by employer or date", text: "Full-text search and tags make it easy to pull the last three stubs for an application." },
      { title: "Private income data", text: "Salary information stays on hardware you control, with optional local AI." }
    ],
    tips: [
      "Download every pay stub, not just year-end summaries",
      "Tag by employer and year",
      "Save offer letters and benefits elections with the same employer tag"
    ],
    faqs: [
      { q: "Can DocManFu import from my payroll provider?", a: "No direct integration exists. Download PDFs from the payroll portal and upload them, or drop them into a watched folder." },
      { q: "How long should I keep pay stubs?", a: "Many people keep them at least until they reconcile with their year-end tax forms. Check guidance for your situation." }
    ]
  },
  {
    slug: "home-documents",
    name: "Home and property documents",
    keyword: "home document organizer",
    title: "Home and Property Document Organizer",
    description: "Organize mortgage papers, deeds, leases, HOA documents, and home improvement records in a private, searchable, self-hosted archive.",
    headline: "Every document about your home, in one private place.",
    intro: "Closing packages, deeds, leases, HOA rules, property tax bills, and contractor invoices add up quickly. DocManFu makes them searchable and keeps them private.",
    pains: [
      "Closing packages are hundreds of pages long",
      "Improvement receipts matter years later when you sell",
      "Property tax and HOA bills arrive on different schedules"
    ],
    features: [
      { title: "Search huge PDFs", text: "OCR makes long closing documents and HOA bylaws fully searchable." },
      { title: "Track property bills", text: "Property tax, HOA, and utility bills can use bill tracking with due dates and paid status." },
      { title: "Keep improvement records", text: "Tag contractor invoices and receipts to preserve a history of work on the home." }
    ],
    tips: [
      "Upload the complete closing package as soon as you receive it",
      "Tag home improvement receipts separately from routine maintenance",
      "Keep your homeowners insurance policy tagged with the property"
    ],
    faqs: [
      { q: "Should I still keep the original deed?", a: "Yes. Keep originals of legally important documents in a safe place. DocManFu is your searchable copy." },
      { q: "Can I manage documents for more than one property?", a: "Yes. Use tags for each property and filter by them." }
    ]
  },
  {
    slug: "school-records",
    name: "School records",
    keyword: "school records organizer",
    title: "School Records and Report Card Organizer",
    description: "Keep report cards, transcripts, immunization forms, and school paperwork for the whole family in a private, self-hosted archive.",
    headline: "Report cards, transcripts, and permission slips, finally in one place.",
    intro: "Schools send a steady stream of paper and PDFs: enrollment forms, report cards, test scores, immunization records, and transcripts. DocManFu keeps each child's records organized and private.",
    pains: [
      "Paperwork is split between backpacks, email, and school portals",
      "Transcripts and immunization records are needed at every transition",
      "Portals disappear when a student changes schools"
    ],
    features: [
      { title: "Organize per child", text: "Tag documents by student and school year to see each child's history at a glance." },
      { title: "Scan the backpack pile", text: "Photograph or scan paper handouts and OCR makes them searchable." },
      { title: "Private family archive", text: "Children's records stay on your own storage with optional local AI." }
    ],
    tips: [
      "Tag each document with the student's name and school year",
      "Download report cards from portals at the end of each term",
      "Keep immunization records where you can find them fast"
    ],
    faqs: [
      { q: "Can kids have their own accounts?", a: "DocManFu supports multiple users with admin and user roles, though most families manage records from a parent's account." },
      { q: "Does it work on a tablet?", a: "Yes. DocManFu runs in any modern browser, including tablets and phones." }
    ]
  }
];
