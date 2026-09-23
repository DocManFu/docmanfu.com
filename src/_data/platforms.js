// Programmatic SEO: one deployment landing page per platform at /self-host/<slug>/.
// DocManFu runs anywhere Docker Engine and Docker Compose v2 run; keep notes generic
// and point to the official deployment guide for specifics.
export default [
  {
    slug: "synology-nas",
    name: "Synology NAS",
    title: "Self-Hosted Document Management on Synology NAS",
    description: "Run DocManFu on a Synology NAS with Docker Compose for private OCR, AI organization, and full-text search of your personal documents.",
    intro: "A Synology NAS already holds your files and runs around the clock, which makes it a natural home for a private document archive.",
    why: [
      "Documents live on the same redundant storage as the rest of your files",
      "Always-on hardware keeps the scanner-folder watcher and background jobs running",
      "Existing Synology backup tasks can protect the archive"
    ],
    notes: [
      "Use a Docker-capable model and install Container Manager",
      "Run the Compose stack over SSH or as a Container Manager project",
      "OCR and AI are CPU-intensive; entry-level models will process large imports slowly",
      "Store DocManFu data on a shared folder that is included in your backups"
    ]
  },
  {
    slug: "unraid",
    name: "Unraid",
    title: "Self-Hosted Document Management on Unraid",
    description: "Deploy DocManFu on Unraid with Docker Compose for a private, searchable document archive with OCR and optional local AI.",
    intro: "Unraid is a popular homelab platform with first-class Docker support, and plenty of storage for a lifetime of documents.",
    why: [
      "Plenty of storage for scans and PDFs",
      "Spare CPU for OCR and local Ollama models",
      "Fits alongside the other self-hosted services you already run"
    ],
    notes: [
      "Install a Docker Compose plugin to run the multi-container stack",
      "Keep PostgreSQL and document data on persistent appdata or array storage",
      "Add a GPU for faster local AI if your server has one",
      "Include DocManFu data in your appdata backup routine"
    ]
  },
  {
    slug: "truenas-scale",
    name: "TrueNAS SCALE",
    title: "Self-Hosted Document Management on TrueNAS SCALE",
    description: "Run DocManFu on TrueNAS SCALE for ZFS-backed, private document management with OCR, search, and optional local AI.",
    intro: "TrueNAS SCALE pairs ZFS data protection with container support, a strong foundation for records you intend to keep for decades.",
    why: [
      "ZFS checksums and snapshots protect long-lived documents",
      "Snapshots give you a rollback point before big imports",
      "Replication tasks can copy the archive offsite"
    ],
    notes: [
      "Run the Docker Compose stack using the container tooling available in your SCALE release",
      "Put document and database storage on dedicated datasets",
      "Schedule snapshots and replicate them to another location",
      "Check the deployment guide for required environment variables"
    ]
  },
  {
    slug: "proxmox",
    name: "Proxmox",
    title: "Self-Hosted Document Management on Proxmox",
    description: "Deploy DocManFu in a Proxmox VM or container with Docker Compose for private OCR, AI tagging, and document search.",
    intro: "Proxmox makes it easy to give DocManFu its own isolated VM, with snapshots and backups handled at the hypervisor.",
    why: [
      "Isolate your document archive from other services",
      "Hypervisor snapshots before upgrades",
      "Proxmox Backup Server can protect the whole VM"
    ],
    notes: [
      "A small Linux VM with Docker Engine and Compose v2 is the simplest setup",
      "Allocate at least 2 GB of RAM, more if you run local AI",
      "Pass through a GPU if you want faster local Ollama models",
      "Snapshot the VM before upgrading DocManFu"
    ]
  },
  {
    slug: "vps",
    name: "a VPS",
    title: "Self-Hosted Document Management on a VPS",
    description: "Run DocManFu on a private virtual server with Docker Compose and HTTPS for a personal document archive you can reach anywhere.",
    intro: "A small virtual private server gives you a document archive reachable from anywhere, without handing your files to a document SaaS.",
    why: [
      "Access your archive from any browser",
      "Predictable monthly infrastructure cost, no per-seat fees",
      "No hardware to maintain at home"
    ],
    notes: [
      "Choose a server with at least 2 GB of RAM and enough disk for your archive",
      "Put DocManFu behind HTTPS with Caddy, Traefik, or another reverse proxy",
      "Use strong unique secrets and keep Docker and the OS updated",
      "Back up PostgreSQL and document storage to a separate provider"
    ]
  },
  {
    slug: "home-server",
    name: "a home server",
    title: "Self-Hosted Document Management on a Home Server",
    description: "Turn a mini PC or spare computer into a private document server with DocManFu, Docker Compose, OCR, and optional local AI.",
    intro: "A mini PC or retired desktop is plenty for a household document archive, and it keeps everything inside your own walls.",
    why: [
      "Documents never leave your home network unless you choose",
      "Run local AI with Ollama on hardware you already own",
      "No ongoing software or hosting fees"
    ],
    notes: [
      "Install a Linux distribution, Docker Engine, and Docker Compose v2",
      "Use a VPN or reverse proxy with HTTPS if you need remote access",
      "Keep a backup on a separate drive and another copy offsite",
      "Point your scanner at a folder watched by the DocManFu CLI"
    ]
  },
  {
    slug: "docker-desktop",
    name: "Docker Desktop",
    title: "Run DocManFu on macOS or Windows with Docker Desktop",
    description: "Try or run DocManFu on your Mac or Windows PC with Docker Desktop for private document management with OCR and search.",
    intro: "Docker Desktop is the fastest way to try DocManFu on the computer you are using right now.",
    why: [
      "Evaluate DocManFu before committing server hardware",
      "Keep a single-user archive on your own laptop or desktop",
      "Native macOS Ollama can provide local AI"
    ],
    notes: [
      "Install Docker Desktop and give it enough memory for OCR",
      "Clone the repository and start the stack with the included script",
      "Open the web app on localhost once services are healthy",
      "Remember that the archive is only available while your computer is running"
    ]
  }
];
