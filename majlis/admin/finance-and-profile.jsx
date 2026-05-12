// Majlis Admin — Finance + Profile screens

// ═══════════════ 3.6 FINANCE ═══════════════
const Finance = () => (
  <div className="scr">
    <StatusSpacer/>
    <div className="subhead">
      <div className="back"><Ic n="back" size={18}/></div>
      <div className="titles">
        <div className="crumb">الإدارة</div>
        <div className="h">القسم المالي</div>
      </div>
      <div className="trail">
        <div className="back"><Ic n="download" size={18}/></div>
      </div>
    </div>

    <div className="scrollwrap no-tab">
      {/* In/Out cards */}
      <div className="stats-row" style={{ marginTop: 8 }}>
        <div className="card" style={{ border: "1.5px solid var(--success)", padding: 14, background: "var(--success-bg)" }}>
          <div className="row between">
            <span className="muted" style={{ font: "600 12px/1 var(--font-sans)", color: "var(--success)" }}>الوارد</span>
            <div style={{ background: "var(--success)", color: "#fff", width: 24, height: 24, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Ic n="arrowDown" size={14}/>
            </div>
          </div>
          <div style={{ font: "900 24px/1 var(--font-sans)", color: "var(--success)", marginTop: 10 }}>٥٨,٤٠٠</div>
          <div className="muted" style={{ font: "500 12px/1 var(--font-sans)", marginTop: 4 }}>ر.س · هذا الشهر</div>
        </div>
        <div className="card" style={{ border: "1.5px solid var(--danger)", padding: 14, background: "var(--danger-bg)" }}>
          <div className="row between">
            <span className="muted" style={{ font: "600 12px/1 var(--font-sans)", color: "var(--danger)" }}>الصادر</span>
            <div style={{ background: "var(--danger)", color: "#fff", width: 24, height: 24, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Ic n="arrowUp" size={14}/>
            </div>
          </div>
          <div style={{ font: "900 24px/1 var(--font-sans)", color: "var(--danger)", marginTop: 10 }}>١٦,٢٠٠</div>
          <div className="muted" style={{ font: "500 12px/1 var(--font-sans)", marginTop: 4 }}>ر.س · هذا الشهر</div>
        </div>
      </div>

      {/* Balance */}
      <div className="section tight">
        <div className="hero" style={{ margin: 0, background: "linear-gradient(135deg, #3a8e6a, #1f7a52)" }}>
          <div className="row between">
            <div>
              <div className="h-eyebrow">الرصيد الحالي</div>
              <div className="h-title" style={{ fontSize: 36, marginTop: 8 }}>٤٢,٢٠٠ <span style={{ fontSize: 16, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>ر.س</span></div>
              <div className="h-sub">آخر تحديث اليوم ٣:٢٠ م</div>
            </div>
            <div style={{ width: 56, height: 56, borderRadius: 18, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Ic n="wallet" size={26}/>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly chart */}
      <div className="section">
        <div className="section-head">
          <div className="title">الحركة الأسبوعية</div>
          <span className="row gap">
            <span className="legend"><span className="ld" style={{ background: "var(--success)" }}/> وارد</span>
            <span className="legend"><span className="ld" style={{ background: "var(--danger)" }}/> صادر</span>
          </span>
        </div>
        <div className="chart-card">
          <div className="minibar" style={{ height: 110 }}>
            {[[60,30],[78,45],[55,25],[88,40],[72,50],[95,38],[82,28]].map(([a,b], i) => (
              <div key={i} className="col">
                <div className="b" style={{ height: a + "%", background: "var(--success)" }}/>
                <div className="b" style={{ height: b + "%", background: "var(--danger)" }}/>
              </div>
            ))}
          </div>
          <div className="chart-labels" style={{ marginTop: 10 }}>
            <div>سبت</div><div>أحد</div><div>اثن</div><div>ثلاث</div><div>أربع</div><div>خميس</div><div>جمع</div>
          </div>
        </div>
      </div>

      {/* Recent operations */}
      <div className="section">
        <div className="section-head">
          <div className="title">آخر العمليات</div>
          <span className="all">عرض الكل ‹</span>
        </div>
        {[
          { t: "اشتراك ربيع — أحمد العنزي", d: "اليوم", amt: "+ ٤٠٠", k: "in" },
          { t: "راتب الشيخ عبدالله",         d: "أمس",  amt: "- ٥,٠٠٠", k: "out" },
          { t: "اشتراك ربيع — محمد الشمري", d: "أمس",  amt: "+ ٤٠٠", k: "in" },
          { t: "شراء كتب ومراجع",            d: "قبل يومين", amt: "- ١,٢٠٠", k: "out" },
          { t: "رسوم نشاطات — يوسف الزهراني", d: "قبل ٣ أيام", amt: "+ ٢٠٠", k: "in" },
        ].map((op, i) => (
          <div key={i} className="card card-row">
            <div className={"ic " + (op.k === "in" ? "" : "danger")} style={op.k === "in" ? { background: "var(--success-bg)", color: "var(--success)" } : {}}>
              <Ic n={op.k === "in" ? "arrowDown" : "arrowUp"} size={18}/>
            </div>
            <div className="body">
              <div className="t" style={{ fontSize: 14 }}>{op.t}</div>
              <div className="s">{op.d}</div>
            </div>
            <div style={{
              font: "800 15px/1 var(--font-sans)",
              color: op.k === "in" ? "var(--success)" : "var(--danger)",
            }}>{op.amt}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <button className="btn outline block"><Ic n="pdf" size={16}/> تصدير تقرير PDF</button>
      </div>
      <div className="spacer-20"/>
    </div>
  </div>
);

// ═══════════════ 3.7 PROFILE (Director) ═══════════════
const DirectorProfile = () => (
  <div className="scr">
    <StatusSpacer/>
    <AdminTopBar/>

    <div className="scrollwrap">
      {/* avatar with gold edit */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "12px 0 18px" }}>
        <div style={{ position: "relative" }}>
          <div className="avatar-lg" style={{
            width: 104, height: 104, fontSize: 40,
            background: "linear-gradient(135deg, var(--brand-600), var(--brand-800))",
            color: "#fff",
            boxShadow: "0 12px 28px rgba(14, 76, 58, 0.32)",
          }}>ن</div>
          <div style={{
            position: "absolute", bottom: 0, left: -4,
            width: 36, height: 36, borderRadius: 14,
            background: "var(--gold-400)", color: "var(--fg-on-gold)",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "3px solid var(--bg)",
            boxShadow: "0 4px 10px rgba(201, 161, 74, 0.45)",
          }}><Ic n="edit" size={16}/></div>
        </div>
        <div style={{ font: "800 20px/1.2 var(--font-sans)", marginTop: 14 }}>نورة عبدالله المشرفة</div>
        <div className="muted" style={{ font: "700 13px/1 var(--font-sans)", marginTop: 6 }}>AD-001</div>
        <div style={{ marginTop: 10 }}>
          <Badge tone="gold"><Ic n="shieldCheck" size={11}/> مدير عام</Badge>
        </div>
      </div>

      <div className="subdivider">المعلومات الشخصية</div>
      <div className="inset-list">
        <div className="inset-row">
          <div className="ic"><Ic n="user" size={18}/></div>
          <div className="body">
            <div className="s">الاسم الكامل</div>
            <div className="t">نورة عبدالله المشرفة</div>
          </div>
          <div className="chev"><Ic n="edit" size={14} color="var(--fg-faint)"/></div>
        </div>
        <div className="inset-row">
          <div className="ic info"><Ic n="phone" size={18}/></div>
          <div className="body">
            <div className="s">رقم الجوال</div>
            <div className="t">+966 50 444 1122</div>
          </div>
          <div className="chev"><Ic n="edit" size={14} color="var(--fg-faint)"/></div>
        </div>
        <div className="inset-row">
          <div className="ic gold"><Ic n="key" size={18}/></div>
          <div className="body">
            <div className="s">الكود الإداري</div>
            <div className="t">AD-001</div>
          </div>
          <div className="chev">
            <Badge tone="neutral">للقراءة</Badge>
          </div>
        </div>
        <div className="inset-row">
          <div className="ic purple"><Ic n="inbox" size={18}/></div>
          <div className="body">
            <div className="s">البريد الإلكتروني</div>
            <div className="t">noura@majlis.sa</div>
          </div>
          <div className="chev"><Ic n="edit" size={14} color="var(--fg-faint)"/></div>
        </div>
      </div>

      <div className="subdivider">آخر تسجيلات الدخول</div>
      <div className="inset-list">
        <div className="inset-row">
          <div className="ic"><Ic n="shieldCheck" size={18}/></div>
          <div className="body">
            <div className="t">جلسة هذا الجهاز</div>
            <div className="s">iPhone 15 · الرياض · اليوم ٨:٤٢ ص</div>
          </div>
          <div className="chev"><Badge tone="success" dot>الحالية</Badge></div>
        </div>
        <div className="inset-row">
          <div className="ic info"><Ic n="shield" size={18}/></div>
          <div className="body">
            <div className="t">متصفح Safari — Mac</div>
            <div className="s">الرياض · أمس ٧:١٥ م</div>
          </div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic warn"><Ic n="shield" size={18}/></div>
          <div className="body">
            <div className="t">iPhone 15 — الويب</div>
            <div className="s">الرياض · ١٣ مارس ٢:٠٠ م</div>
          </div>
          <div className="chev"><Chev/></div>
        </div>
      </div>

      <div className="subdivider">الإعدادات</div>
      <div className="inset-list">
        <div className="inset-row">
          <div className="ic"><Ic n="settings" size={18}/></div>
          <div className="body"><div className="t">الإعدادات العامة</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic danger"><Ic n="logout" size={18}/></div>
          <div className="body"><div className="t" style={{ color: "var(--danger)" }}>تسجيل الخروج</div></div>
        </div>
      </div>

      <div className="spacer-20"/>
    </div>
    <TabBar active={3}/>
  </div>
);

Object.assign(window, { Finance, DirectorProfile });
