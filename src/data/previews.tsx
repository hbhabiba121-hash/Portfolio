/**
 * Mini UI snippets — one per project.
 * Each preview is a self-contained React element that visually
 * hints at the project's interface without any external deps.
 */

// ─── AiNexus ─────────────────────────────────────────────────────────────────
export const AiNexusPreview = (
  <div className="flex h-full flex-col gap-2 p-1 font-mono text-[10px]">
    <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-black/30 px-3 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
      <span className="text-white/50">AiNexus</span>
      <span className="ml-auto text-emerald-300/60">GPT-4o</span>
    </div>
    <div className="flex-1 space-y-1.5 overflow-hidden rounded-lg border border-white/8 bg-black/20 p-2">
      <div className="flex gap-2">
        <span className="rounded bg-white/6 px-2 py-0.5 text-white/40">User</span>
        <span className="text-white/60">Optimize this function…</span>
      </div>
      <div className="flex gap-2">
        <span className="rounded bg-emerald-400/12 px-2 py-0.5 text-emerald-300/70">AI</span>
        <span className="text-emerald-200/70">Here's the refactored version:</span>
      </div>
      <div className="rounded-md border border-emerald-400/10 bg-black/40 p-2 text-[9px] text-emerald-300/60 leading-4">
        <span className="text-purple-300/70">const</span>{" "}
        <span className="text-blue-300/70">optimized</span>{" "}
        <span className="text-white/40">= (</span>
        <span className="text-orange-300/70">data</span>
        <span className="text-white/40">) =&gt; {"{"}</span>
        <br />
        <span className="text-white/40 pl-3">return data.</span>
        <span className="text-yellow-300/70">filter</span>
        <span className="text-white/40">(Boolean);</span>
        <br />
        <span className="text-white/40">{"}"}</span>
      </div>
    </div>
    <div className="flex gap-1">
      {["Generate", "Analyze CV", "Summarize"].map((label) => (
        <span
          key={label}
          className="rounded-full border border-white/8 bg-white/4 px-2 py-0.5 text-[9px] text-white/45"
        >
          {label}
        </span>
      ))}
    </div>
  </div>
);

// ─── RabatBites ───────────────────────────────────────────────────────────────
export const RabatBitesPreview = (
  <div className="flex h-full flex-col gap-2 p-1 text-[10px]">
    <div className="flex items-center justify-between rounded-xl border border-white/8 bg-black/30 px-3 py-2">
      <span className="font-semibold text-white/80">RabatBites</span>
      <span className="rounded-full bg-orange-400/15 border border-orange-400/20 px-2 py-0.5 text-[9px] text-orange-300">
        📍 Rabat
      </span>
    </div>
    <div className="grid grid-cols-2 gap-1.5 flex-1">
      {[
        { name: "Tagine Kefta", price: "45 MAD", emoji: "🍲", color: "from-orange-500/20" },
        { name: "Couscous", price: "60 MAD", emoji: "🥘", color: "from-yellow-500/20" },
        { name: "Briouats", price: "25 MAD", emoji: "🥟", color: "from-amber-500/20" },
        { name: "Msemen", price: "15 MAD", emoji: "🫓", color: "from-red-500/20" },
      ].map((item) => (
        <div
          key={item.name}
          className={`relative overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br ${item.color} to-transparent p-2`}
        >
          <div className="text-base leading-none">{item.emoji}</div>
          <div className="mt-1 text-[9px] font-medium text-white/75 leading-tight">{item.name}</div>
          <div className="text-[9px] text-emerald-300/70">{item.price}</div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-emerald-400/10 px-3 py-1.5">
      <span className="text-emerald-300 text-[9px]">🛒</span>
      <span className="text-emerald-300 text-[9px] font-medium">Commander maintenant</span>
    </div>
  </div>
);

// ─── Rabat-Salé Guide ────────────────────────────────────────────────────────
export const RabatSalePreview = (
  <div className="flex h-full flex-col gap-2 p-1 text-[10px]">
    <div className="relative overflow-hidden rounded-xl border border-white/8 bg-black/30 h-16 flex items-end p-2">
      {/* Fake map grid */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(52,211,153,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.4) 1px, transparent 1px)",
          backgroundSize: "12px 12px"
        }}
      />
      <div className="absolute top-2 left-4 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
      <div className="absolute top-5 left-12 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.9)]" />
      <div className="absolute top-3 right-6 h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.9)]" />
      <span className="relative text-[9px] text-white/50 bg-black/40 px-1.5 py-0.5 rounded">
        Rabat · Salé · Témara
      </span>
    </div>
    <div className="space-y-1 flex-1">
      {[
        { icon: "🕌", name: "Kasbah des Oudayas", tag: "Monument" },
        { icon: "🏛️", name: "Tour Hassan", tag: "Historique" },
        { icon: "☕", name: "Café Maure", tag: "Favori ♥" },
      ].map((place) => (
        <div key={place.name} className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/3 px-2 py-1.5">
          <span>{place.icon}</span>
          <span className="flex-1 text-white/70 truncate">{place.name}</span>
          <span className="text-[8px] text-emerald-300/60 border border-emerald-400/15 rounded-full px-1.5 py-0.5">{place.tag}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── MedLik ──────────────────────────────────────────────────────────────────
export const MedLikPreview = (
  <div className="flex h-full flex-col gap-2 p-1 text-[10px]">
    <div className="flex items-center justify-between rounded-xl border border-white/8 bg-black/30 px-3 py-2">
      <span className="font-semibold text-white/80">MedLik</span>
      <span className="rounded-full bg-blue-400/12 border border-blue-400/20 px-2 py-0.5 text-[9px] text-blue-300">
        + Nouveau RDV
      </span>
    </div>
    <div className="grid grid-cols-3 gap-1">
      {[
        { v: "124", l: "Patients", color: "text-blue-300" },
        { v: "8", l: "RDV today", color: "text-emerald-300" },
        { v: "3", l: "Urgents", color: "text-red-300" },
      ].map((s) => (
        <div key={s.l} className="rounded-lg border border-white/8 bg-black/20 p-2 text-center">
          <div className={`text-base font-bold ${s.color}`}>{s.v}</div>
          <div className="text-[8px] text-white/40 leading-tight">{s.l}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 space-y-1 overflow-hidden">
      {[
        { name: "Karim B.", time: "09:30", status: "Confirmé", color: "bg-emerald-400" },
        { name: "Fatima Z.", time: "11:00", status: "En attente", color: "bg-yellow-400" },
        { name: "Youssef A.", time: "14:15", status: "Urgent", color: "bg-red-400" },
      ].map((p) => (
        <div key={p.name} className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/3 px-2 py-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${p.color}`} />
          <span className="flex-1 text-white/70">{p.name}</span>
          <span className="text-white/40">{p.time}</span>
          <span className="text-[8px] text-white/40">{p.status}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── E-commerce ──────────────────────────────────────────────────────────────
export const EcommercePreview = (
  <div className="flex h-full flex-col gap-2 p-1 text-[10px]">
    <div className="flex items-center justify-between rounded-xl border border-white/8 bg-black/30 px-3 py-2">
      <span className="font-semibold text-white/80">ShopCo</span>
      <span className="relative">
        <span className="text-white/60">🛒</span>
        <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-400 text-[7px] font-bold text-black">3</span>
      </span>
    </div>
    <div className="grid grid-cols-2 gap-1.5 flex-1">
      {[
        { name: "Sneakers Pro", price: "899 MAD", badge: "New", color: "from-violet-500/20" },
        { name: "Bag Premium", price: "1200 MAD", badge: "-20%", color: "from-pink-500/20" },
        { name: "Watch Elite", price: "2500 MAD", badge: "Hot", color: "from-amber-500/20" },
        { name: "Cap Classic", price: "250 MAD", badge: null, color: "from-cyan-500/20" },
      ].map((item) => (
        <div
          key={item.name}
          className={`relative rounded-xl border border-white/8 bg-gradient-to-br ${item.color} to-transparent p-2`}
        >
          {item.badge && (
            <span className="absolute right-1.5 top-1.5 rounded-full bg-emerald-400/20 border border-emerald-400/25 px-1.5 py-0.5 text-[8px] text-emerald-300">
              {item.badge}
            </span>
          )}
          <div className="mt-3 text-[9px] font-medium text-white/75 leading-tight">{item.name}</div>
          <div className="text-[9px] text-emerald-300/70 mt-0.5">{item.price}</div>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between rounded-xl border border-white/8 bg-black/20 px-3 py-1.5">
      <span className="text-white/50">Total panier</span>
      <span className="font-semibold text-emerald-300">3 049 MAD</span>
    </div>
  </div>
);