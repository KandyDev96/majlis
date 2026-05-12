// Majlis Admin — Dashboard (الإدارة), Sheikhs list, Sheikh detail + sub-sections

// ═══════════════ 3.1 DASHBOARD ═══════════════
const Dashboard = () => (
  <div className="scr">
    <StatusSpacer/>
    <AdminTopBar/>
    <div className="scrollwrap">
      {/* Hero — context */}
      <div className="hero">
        <div className="h-top">
          <div>
            <div className="h-eyebrow">لوحة الإدارة</div>
            <div className="h-title">منصة مجلس</div>
            <div className="h-sub">١٥ رمضان ١٤٤٦ هـ — ١٥ مارس ٢٠٢٥</div>
          </div>
          <Badge tone="gold">مدير عام</Badge>
        </div>
      </div>

      {/* 4 color stat cards */}
      <div className="stats-row">
        <CStat tone="olive"  icon="users"  value="٢٤٧" label="إجمالي الطلاب"  delta="+ ٨٪"/>
        <CStat tone="purple" icon="beard"  value="١٢"  label="المشايخ النشطون" delta="+ ٢ جدد"/>
        <CStat tone="blue"   icon="cal"    value="٨"   label="جلسات اليوم"    delta="٥ مكتملة"/>
        <CStat tone="green"  icon="wallet" value="٤٢ ألف" label="الإيرادات الشهرية" delta="+ ١٢٪"/>
      </div>

      {/* Weekly attendance chart */}
      <div className="section">
        <div className="section-head">
          <div className="title">الحضور الأسبوعي</div>
          <span className="muted" style={{ font: "500 12px/1 var(--font-sans)" }}>متوسط ٨٧٪</span>
        </div>
        <div className="chart-card">
          <div className="chart-tabs">
            <div className="chart-tab">يوم</div>
            <div className="chart-tab active">أسبوع</div>
            <div className="chart-tab">شهر</div>
          </div>
          <div className="chart-grid">
            {[60,72,55,80,68,90,95].map((h, i) => (
              <div key={i} className={"chart-bar" + (i === 6 ? " active" : "")}
                   style={{ height: h + "%" }}/>
            ))}
          </div>
          <div className="chart-labels">
            <div>سبت</div><div>أحد</div><div>اثن</div><div>ثلاث</div><div>أربع</div><div>خميس</div><div className="active">جمع</div>
          </div>
        </div>
      </div>

      {/* Today's sessions */}
      <div className="section">
        <div className="section-head">
          <div className="title">جلسات اليوم</div>
          <button className="btn sm primary"><Ic n="add" size={14}/> إضافة جلسة</button>
        </div>

        <div className="rail-card">
          <div style={{ flex: 1 }}>
            <div className="row between">
              <div style={{ font: "700 15px/1.2 var(--font-sans)" }}>تفسير سورة الكهف</div>
              <div className="muted" style={{ font: "600 12px/1 var(--font-sans)" }}>٥:٢٠ ص</div>
            </div>
            <div className="muted" style={{ font: "500 12px/1.3 var(--font-sans)", marginTop: 4 }}>
              الشيخ عبدالله المالكي · ٤٢ طالب
            </div>
            <div className="row gap" style={{ marginTop: 10 }}>
              <button className="btn sm secondary"><Ic n="check" size={14}/> تحضير</button>
              <button className="btn sm secondary"><Ic n="qr" size={14}/></button>
              <button className="btn sm secondary"><Ic n="edit" size={14}/></button>
            </div>
          </div>
        </div>

        <div className="rail-card gold">
          <div style={{ flex: 1 }}>
            <div className="row between">
              <div style={{ font: "700 15px/1.2 var(--font-sans)" }}>اجتماع المشايخ الشهري</div>
              <div className="muted" style={{ font: "600 12px/1 var(--font-sans)" }}>٧:٠٠ م</div>
            </div>
            <div className="muted" style={{ font: "500 12px/1.3 var(--font-sans)", marginTop: 4 }}>
              قاعة الاجتماعات · ١٢ مشارك
            </div>
            <div className="row gap" style={{ marginTop: 10 }}>
              <button className="btn sm secondary"><Ic n="check" size={14}/> تحضير</button>
              <button className="btn sm secondary"><Ic n="edit" size={14}/></button>
            </div>
          </div>
        </div>

        <div className="rail-card blue">
          <div style={{ flex: 1 }}>
            <div className="row between">
              <div style={{ font: "700 15px/1.2 var(--font-sans)" }}>محاضرة: آداب طلب العلم</div>
              <div className="muted" style={{ font: "600 12px/1 var(--font-sans)" }}>٩:٠٠ م</div>
            </div>
            <div className="muted" style={{ font: "500 12px/1.3 var(--font-sans)", marginTop: 4 }}>
              الشيخ خالد الفهد · ٦٨ مسجل
            </div>
            <div className="row gap" style={{ marginTop: 10 }}>
              <button className="btn sm secondary"><Ic n="check" size={14}/> تحضير</button>
              <button className="btn sm secondary"><Ic n="qr" size={14}/></button>
            </div>
          </div>
        </div>
      </div>

      {/* Active sheikhs */}
      <div className="section">
        <div className="section-head">
          <div className="title">المشايخ النشطون</div>
          <span className="all">إدارة المشايخ ‹</span>
        </div>

        {[
          { i: "ع", n: "الشيخ عبدالله المالكي", t: "تفسير وحديث", s: 42, h: 8, r: 5, c: "olive" },
          { i: "خ", n: "الشيخ خالد الفهد", t: "علوم القرآن", s: 38, h: 6, r: 5, c: "gold" },
          { i: "م", n: "الشيخ محمد العتيبي", t: "الفقه والأصول", s: 31, h: 5, r: 4, c: "purple" },
        ].map((sh, i) => (
          <div key={i} className="list-card">
            <div className={"avatar-lg " + sh.c}>{sh.i}</div>
            <div className="body">
              <div className="row between">
                <div className="name">{sh.n}</div>
                <Stars value={sh.r} size={12}/>
              </div>
              <div className="meta">{sh.t}</div>
              <div className="row gap" style={{ marginTop: 8 }}>
                <Badge tone="success" dot>نشط</Badge>
                <Badge tone="neutral">{sh.s} طالب</Badge>
                <Badge tone="neutral">{sh.h} حلقة</Badge>
              </div>
            </div>
            <Chev/>
          </div>
        ))}
      </div>

      <div className="spacer-20"/>
    </div>
    <TabBar active={0}/>
  </div>
);

// ═══════════════ 3.2 SHEIKHS LIST ═══════════════
const SheikhsList = () => (
  <div className="scr">
    <StatusSpacer/>
    <div className="subhead">
      <div className="back"><Ic n="back" size={18}/></div>
      <div className="titles">
        <div className="crumb">الإدارة</div>
        <div className="h">المشايخ</div>
      </div>
      <div className="trail">
        <div className="back" style={{ background: "var(--brand)", color: "#fff", border: 0 }}><Ic n="add" size={18}/></div>
      </div>
    </div>

    <div className="search">
      <Ic n="search" size={18} color="var(--fg-faint)"/>
      <input placeholder="ابحث عن شيخ، تخصص، منطقة…" defaultValue=""/>
      <div className="filter-btn"><Ic n="filter" size={14}/></div>
    </div>

    <div className="muted" style={{ padding: "16px 24px 4px", font: "600 12px/1 var(--font-sans)" }}>
      ١٢ مشايخ نشطون
    </div>

    <div className="scrollwrap no-tab" style={{ padding: "8px 20px 24px" }}>
      {[
        { i: "ع", n: "الشيخ عبدالله المالكي", p: "+966 50 123 4567", t: "تفسير وحديث", r: "الرياض", s: 42, st: 5, c: "olive", on: true },
        { i: "خ", n: "الشيخ خالد الفهد",      p: "+966 55 987 6543", t: "علوم القرآن", r: "جدة",   s: 38, st: 5, c: "gold",   on: true },
        { i: "م", n: "الشيخ محمد العتيبي",    p: "+966 53 222 1188", t: "الفقه والأصول", r: "الدمام", s: 31, st: 4, c: "purple", on: true },
        { i: "س", n: "الشيخ سعد القحطاني",     p: "+966 56 778 9900", t: "السيرة النبوية", r: "مكة",   s: 26, st: 4, c: "blue",   on: false },
        { i: "ي", n: "الشيخ ياسر الشمري",      p: "+966 50 445 3322", t: "العقيدة",       r: "المدينة", s: 19, st: 5, c: "olive",  on: true },
      ].map((sh, i) => (
        <div key={i} className="list-card">
          <div className={"avatar-lg " + sh.c}>{sh.i}</div>
          <div className="body">
            <div className="name">{sh.n}</div>
            <div className="meta row gap"><Ic n="phone" size={12}/> {sh.p}</div>
            <div className="tags">
              <Badge tone="olive">{sh.t}</Badge>
              <Badge tone="neutral"><Ic n="pin" size={10}/> {sh.r}</Badge>
            </div>
          </div>
          <div className="right">
            <div className="row gap" style={{ font: "700 13px/1 var(--font-sans)" }}>
              <Ic n="starF" size={12} color="var(--gold-400)"/> {sh.st}.٠
            </div>
            <div className="muted" style={{ font: "600 11px/1 var(--font-sans)" }}>{sh.s} طالب</div>
            {sh.on ? <Badge tone="success" dot>نشط</Badge> : <Badge tone="danger" dot>موقوف</Badge>}
          </div>
          <Chev/>
        </div>
      ))}
    </div>

    <TabBar active={2}/>
  </div>
);

// ═══════════════ 3.3 SHEIKH DETAIL — Index ═══════════════
const SheikhDetail = () => (
  <div className="scr">
    <StatusSpacer/>
    <div className="subhead">
      <div className="back"><Ic n="back" size={18}/></div>
      <div className="titles">
        <div className="crumb">المشايخ</div>
        <div className="h">تفاصيل الشيخ</div>
      </div>
      <div className="trail"><div className="back"><Ic n="more" size={18}/></div></div>
    </div>

    <div className="scrollwrap no-tab">
      {/* Sheikh card */}
      <div className="profile-hero">
        <div className="ph-row">
          <div className="ph-avatar">ع</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="ph-name">الشيخ عبدالله المالكي</div>
            <div className="ph-meta row gap"><Ic n="phone" size={12}/> +966 50 123 4567</div>
            <div className="ph-meta row gap"><Ic n="pin" size={12}/> الرياض — مسجد الفاروق</div>
            <div className="ph-tags">
              <span className="ph-tag gold">تفسير وحديث</span>
              <span className="ph-tag"><Ic n="check" size={11}/> نشط</span>
              <span className="ph-tag"><Stars value={5} size={10}/></span>
            </div>
          </div>
        </div>
      </div>

      <div className="subdivider">إدارة الملف</div>

      <div className="inset-list">
        <div className="inset-row">
          <div className="ic"><Ic n="user" size={18}/></div>
          <div className="body"><div className="t">بيانات الشيخ</div><div className="s">الاسم، التواصل، التخصص، الحالة</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic gold"><Ic n="book" size={18}/></div>
          <div className="body"><div className="t">المواد التي يعطيها</div><div className="s">٤ مواد نشطة</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic info"><Ic n="cal" size={18}/></div>
          <div className="body"><div className="t">مواعيد دروسه</div><div className="s">٨ حلقات أسبوعية</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic purple"><Ic n="audio" size={18}/></div>
          <div className="body"><div className="t">الدروس المنفذة</div><div className="s">٣٢ درس — ٢٤ ملف صوتي</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic warn"><Ic n="users" size={18}/></div>
          <div className="body"><div className="t">سجل الحضور</div><div className="s">متوسط ٨٩٪ هذا الشهر</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic"><Ic n="wallet" size={18}/></div>
          <div className="body"><div className="t">مصاريف الشيخ</div><div className="s">٦,٤٠٠ ر.س هذا الشهر</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic danger"><Ic n="bag" size={18}/></div>
          <div className="body"><div className="t">العهد المسلّمة</div><div className="s">٢٤ عهدة — ٣ قيد التسليم</div></div>
          <div className="chev"><Chev/></div>
        </div>
      </div>

      <div className="spacer-20"/>
    </div>
  </div>
);

// ═══════════════ 3.3.1 SHEIKH DATA ═══════════════
const SheikhData = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="الشيخ عبدالله" title="بيانات الشيخ"/>

    <div className="scrollwrap no-tab" style={{ padding: "0 20px" }}>
      {/* avatar editor */}
      <div className="row" style={{ justifyContent: "center", margin: "12px 0 24px" }}>
        <div style={{ position: "relative" }}>
          <div className="avatar-lg" style={{ width: 96, height: 96, fontSize: 36 }}>ع</div>
          <div style={{
            position: "absolute", bottom: 0, left: -2,
            width: 32, height: 32, borderRadius: 12,
            background: "var(--gold-400)", color: "var(--fg-on-gold)",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "3px solid var(--bg)",
          }}><Ic n="edit" size={14}/></div>
        </div>
      </div>

      <div className="field">
        <div className="lbl">الاسم الكامل</div>
        <input className="input" defaultValue="عبدالله بن سعد المالكي"/>
      </div>
      <div className="input-row">
        <div className="field">
          <div className="lbl">رقم الجوال</div>
          <input className="input" defaultValue="+966 50 123 4567"/>
        </div>
        <div className="field">
          <div className="lbl">رقم الواتساب</div>
          <input className="input" defaultValue="+966 50 123 4567"/>
        </div>
      </div>
      <div className="input-row">
        <div className="field">
          <div className="lbl">التخصص</div>
          <div className="select">تفسير وحديث <Ic n="chevDown" size={14} color="var(--fg-muted)"/></div>
        </div>
        <div className="field">
          <div className="lbl">المنطقة</div>
          <div className="select">الرياض <Ic n="chevDown" size={14} color="var(--fg-muted)"/></div>
        </div>
      </div>
      <div className="field">
        <div className="lbl">المسجد الرئيسي</div>
        <input className="input" defaultValue="مسجد الفاروق — حي الملقا"/>
      </div>

      <div className="field">
        <div className="lbl">الحالة</div>
        <div className="row gap" style={{ background: "var(--surface-2)", padding: 4, borderRadius: 14 }}>
          <div style={{
            flex: 1, textAlign: "center", padding: "10px 0",
            background: "var(--brand)", color: "#fff", borderRadius: 10,
            font: "700 14px/1 var(--font-sans)",
          }}>نشط</div>
          <div style={{
            flex: 1, textAlign: "center", padding: "10px 0",
            color: "var(--fg-muted)", font: "600 14px/1 var(--font-sans)",
          }}>موقوف</div>
        </div>
      </div>

      <button className="btn primary block" style={{ marginTop: 12 }}>حفظ التعديلات</button>
      <div className="spacer-20"/>
    </div>
  </div>
);

// ═══════════════ 3.3.2 SHEIKH MATERIALS ═══════════════
const SheikhMaterials = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead
      crumb="الشيخ عبدالله"
      title="المواد التي يعطيها"
      trail={<div className="back" style={{ background: "var(--brand)", color: "#fff", border: 0 }}><Ic n="add" size={18}/></div>}
    />
    <div className="scrollwrap no-tab" style={{ padding: "8px 20px" }}>
      {[
        { t: "تفسير ابن كثير", c: "تفسير", s: 42, on: true,  ic: "olive" },
        { t: "صحيح البخاري",   c: "حديث",  s: 38, on: true,  ic: "gold" },
        { t: "بلوغ المرام",    c: "حديث",  s: 26, on: true,  ic: "gold" },
        { t: "تجويد المصحف",   c: "تجويد", s: 0,  on: false, ic: "info" },
      ].map((m, i) => (
        <div key={i} className="card card-row">
          <div className={"ic " + m.ic}><Ic n="book" size={18}/></div>
          <div className="body">
            <div className="t">{m.t}</div>
            <div className="row gap" style={{ marginTop: 6 }}>
              <Badge tone="olive">{m.c}</Badge>
              <Badge tone="neutral">{m.s} طالب</Badge>
              {m.on ? <Badge tone="success" dot>نشطة</Badge> : <Badge tone="danger" dot>موقوفة</Badge>}
            </div>
          </div>
          <div className="row gap">
            <div className="iconbtn" style={{ width: 32, height: 32, borderRadius: 10 }}><Ic n="edit" size={14}/></div>
            <div className="iconbtn" style={{ width: 32, height: 32, borderRadius: 10, color: "var(--danger)" }}><Ic n="trash" size={14}/></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ═══════════════ 3.3.3 SHEIKH SCHEDULE ═══════════════
const SheikhSchedule = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="الشيخ عبدالله" title="مواعيد دروسه"
      trail={<div className="back" style={{ background: "var(--brand)", color: "#fff", border: 0 }}><Ic n="add" size={18}/></div>}/>

    <div className="scrollwrap no-tab" style={{ padding: "0 20px" }}>
      <div className="week-cal" style={{ marginBottom: 18 }}>
        {[
          { dn: "سبت", dd: "١٥", has: true },
          { dn: "أحد", dd: "١٦", has: true },
          { dn: "اثن", dd: "١٧", has: false },
          { dn: "ثلاث", dd: "١٨", has: true },
          { dn: "أربع", dd: "١٩", has: false },
          { dn: "خميس", dd: "٢٠", has: true, active: true },
          { dn: "جمع", dd: "٢١", has: true },
        ].map((d, i) => (
          <div key={i} className={"week-day" + (d.active ? " active" : "")}>
            <div className="dn">{d.dn}</div>
            <div className="dd">{d.dd}</div>
            {d.has ? <div className="has"/> : <div style={{ height: 5 }}/>}
          </div>
        ))}
      </div>

      {[
        { t: "تفسير سورة الكهف", d: "السبت — ٥:٢٠ ص", p: "مسجد الفاروق", k: "أسبوعي" },
        { t: "شرح صحيح البخاري", d: "الأحد — ٧:٠٠ م", p: "قاعة الدراسة", k: "أسبوعي" },
        { t: "مجلس بلوغ المرام", d: "الثلاثاء — ٨:٣٠ م", p: "مسجد الفاروق", k: "أسبوعي" },
        { t: "اجتماع المشايخ", d: "الخميس — ٧:٠٠ م", p: "الإدارة", k: "شهري" },
        { t: "خطبة الجمعة", d: "الجمعة — ١٢:٠٠ م", p: "مسجد الفاروق", k: "أسبوعي" },
      ].map((l, i) => (
        <div key={i} className="rail-card" style={{ marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <div className="row between">
              <div style={{ font: "700 14px/1.2 var(--font-sans)" }}>{l.t}</div>
              <Badge tone={l.k === "شهري" ? "gold" : "olive"}>{l.k}</Badge>
            </div>
            <div className="muted" style={{ font: "500 12px/1.4 var(--font-sans)", marginTop: 4 }}>
              <Ic n="clock" size={11}/> {l.d} · <Ic n="pin" size={11}/> {l.p}
            </div>
            <div className="row gap" style={{ marginTop: 8 }}>
              <button className="btn sm secondary"><Ic n="edit" size={12}/> تعديل</button>
              <button className="btn sm danger-ghost"><Ic n="trash" size={12}/></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ═══════════════ 3.3.4 SHEIKH LESSONS (with files) ═══════════════
const SheikhLessons = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="الشيخ عبدالله" title="الدروس المنفذة"/>
    <div className="stats-row">
      <CStat tone="olive" icon="book"  value="٣٢" label="إجمالي الدروس" soft/>
      <CStat tone="gold"  icon="audio" value="٢٤" label="ملفات صوتية"   soft/>
    </div>
    <div className="stats-row" style={{ marginTop: 10 }}>
      <CStat tone="blue"  icon="file" value="١٨" label="ملفات نصية" soft/>
      <CStat tone="green" icon="trend" value="٩١٪" label="معدل الإتمام" soft/>
    </div>

    <div className="section">
      <div className="section-head">
        <div className="title">آخر الدروس</div>
        <span className="muted" style={{ font: "500 12px/1 var(--font-sans)" }}>٣٢</span>
      </div>
      {[
        { n: "#٣٢", t: "تفسير الآيات ١٠٠–١٢٠ من الكهف", d: "١٥ مارس", aud: true, doc: true },
        { n: "#٣١", t: "تفسير الآيات ٨٠–٩٩ من الكهف",  d: "٨ مارس",  aud: true, doc: false },
        { n: "#٣٠", t: "أحاديث باب الإيمان",          d: "١ مارس",  aud: true, doc: true },
        { n: "#٢٩", t: "تفسير الآيات ٦٠–٧٩ من الكهف",  d: "٢٣ فبراير", aud: false, doc: true },
      ].map((l, i) => (
        <div key={i} className="card">
          <div className="row between">
            <div>
              <div className="muted" style={{ font: "700 11px/1 var(--font-sans)" }}>{l.n}</div>
              <div style={{ font: "700 14px/1.3 var(--font-sans)", marginTop: 4 }}>{l.t}</div>
              <div className="muted" style={{ font: "500 12px/1 var(--font-sans)", marginTop: 4 }}>{l.d}</div>
            </div>
            <div className="row gap">
              {l.aud ? <div className="iconbtn" style={{ width: 32, height: 32, borderRadius: 10, background: "var(--gold-50)", color: "var(--gold-600)", border: 0 }}><Ic n="mic" size={14}/></div> : null}
              {l.doc ? <div className="iconbtn" style={{ width: 32, height: 32, borderRadius: 10, background: "var(--danger-bg)", color: "var(--danger)", border: 0 }}><Ic n="pdf" size={14}/></div> : null}
            </div>
          </div>
          <div className="row gap" style={{ marginTop: 12 }}>
            <button className="btn sm secondary" style={{ flex: 1 }}><Ic n="mic" size={12}/> رفع صوت</button>
            <button className="btn sm secondary" style={{ flex: 1 }}><Ic n="file" size={12}/> رفع ملف</button>
          </div>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.3.5 SHEIKH ATTENDANCE ═══════════════
const SheikhAttendance = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="الشيخ عبدالله" title="سجل الحضور"/>
    <div className="stats-row">
      <CStat tone="olive" icon="trend" value="٨٩٪" label="متوسط الحضور" soft/>
      <CStat tone="blue"  icon="users" value="٤٢"  label="إجمالي الطلاب" soft/>
    </div>
    <div className="section tight">
      <div className="row gap">
        <button className="btn sm secondary" style={{ flex: 1 }}><Ic n="pdf" size={14}/> تصدير PDF</button>
        <button className="btn sm secondary" style={{ flex: 1 }}><Ic n="excel" size={14}/> تصدير Excel</button>
      </div>
    </div>
    <div className="section tight">
      <div className="section-head"><div className="title">حسب الدرس</div></div>
      {[
        { t: "تفسير الكهف #٣٢", d: "١٥ مارس", p: 38, a: 4, pct: 90, tone: "" },
        { t: "تفسير الكهف #٣١", d: "٨ مارس",  p: 35, a: 7, pct: 83, tone: "warn" },
        { t: "البخاري #١٤",     d: "١ مارس",  p: 28, a: 10, pct: 73, tone: "warn" },
        { t: "بلوغ المرام #٨",  d: "٢٢ فبراير", p: 22, a: 4, pct: 84, tone: "" },
        { t: "البخاري #١٣",     d: "١٥ فبراير", p: 14, a: 14, pct: 50, tone: "danger" },
      ].map((r, i) => (
        <div key={i} className="att-row">
          <div className="top">
            <div className="name">{r.t}</div>
            <div className="date">{r.d}</div>
          </div>
          <div className="bar-row">
            <div className={"progress " + (r.tone === "danger" ? "danger" : r.tone === "warn" ? "warn" : "green")}>
              <div style={{ width: r.pct + "%" }}/>
            </div>
            <div className="nums">{r.p}/{r.p + r.a}</div>
          </div>
          <div className="row gap" style={{ marginTop: 8 }}>
            <Badge tone="success">{r.p} حاضر</Badge>
            <Badge tone="danger">{r.a} غائب</Badge>
          </div>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.3.6 SHEIKH EXPENSES ═══════════════
const SheikhExpenses = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="الشيخ عبدالله" title="مصاريف الشيخ"
      trail={<div className="back" style={{ background: "var(--brand)", color: "#fff", border: 0 }}><Ic n="add" size={18}/></div>}/>

    <div className="hero" style={{ marginTop: 4 }}>
      <div className="h-eyebrow">إجمالي هذا الشهر</div>
      <div className="row between" style={{ alignItems: "flex-end" }}>
        <div className="h-title" style={{ fontSize: 32, marginTop: 8 }}>٦,٤٠٠ ر.س</div>
        <Badge tone="gold">رمضان ١٤٤٦</Badge>
      </div>
      <div className="h-sub">٥ عمليات · آخر تحديث اليوم</div>
    </div>

    <div className="section">
      <div className="section-head"><div className="title">العمليات</div></div>
      {[
        { t: "راتب شهر رمضان", d: "١ رمضان", amt: "٥,٠٠٠", k: "راتب", c: "olive" },
        { t: "مكافأة تفوق",      d: "٧ رمضان", amt: "٧٠٠",   k: "مكافأة", c: "gold" },
        { t: "بدل مواصلات",     d: "١٠ رمضان", amt: "٤٠٠",  k: "بدل", c: "blue" },
        { t: "مكافأة محاضرة",   d: "١٢ رمضان", amt: "٣٠٠",  k: "مكافأة", c: "gold" },
      ].map((e, i) => (
        <div key={i} className="card card-row">
          <div className={"ic " + e.c}><Ic n="wallet" size={18}/></div>
          <div className="body">
            <div className="t">{e.t}</div>
            <div className="s">{e.d} · {e.k}</div>
          </div>
          <div style={{ font: "800 16px/1 var(--font-sans)", color: "var(--brand)" }}>{e.amt}</div>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.3.7 SHEIKH CUSTODY ═══════════════
const SheikhCustody = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="الشيخ عبدالله" title="العهد المسلّمة"
      trail={<div className="back" style={{ background: "var(--brand)", color: "#fff", border: 0 }}><Ic n="add" size={18}/></div>}/>

    <div className="stats-row">
      <CStat tone="olive"  icon="bag"   value="٢٤" label="إجمالي العهد"  soft/>
      <CStat tone="green"  icon="check" value="٢١" label="مُسلَّمة"      soft/>
    </div>
    <div className="stats-row" style={{ marginTop: 10 }}>
      <CStat tone="orange" icon="clock" value="٣"  label="قيد التسليم"  soft/>
      <CStat tone="danger" icon="x"     value="٠"  label="تالفة"        soft/>
    </div>

    <div className="section">
      <div className="section-head"><div className="title">قائمة العهد</div></div>
      {[
        { t: "مصحف مجلد فاخر", s: "أحمد العنزي", p: "١٤٠ ر.س", d: "١٠ مارس", st: "delivered" },
        { t: "كتاب الأذكار",   s: "محمد الشمري", p: "٣٥ ر.س",  d: "١٢ مارس", st: "delivered" },
        { t: "ساعة حلقات",     s: "سلطان القحطاني", p: "٢١٠ ر.س", d: "اليوم",  st: "pending" },
        { t: "بلوغ المرام",    s: "خالد المطيري",  p: "٤٥ ر.س",  d: "أمس",    st: "pending" },
      ].map((c, i) => (
        <div key={i} className="card">
          <div className="row between">
            <div>
              <div style={{ font: "700 15px/1.2 var(--font-sans)" }}>{c.t}</div>
              <div className="muted" style={{ font: "500 12px/1.3 var(--font-sans)", marginTop: 4 }}>
                {c.s} · {c.d}
              </div>
            </div>
            <div style={{ textAlign: "end" }}>
              <div style={{ font: "800 15px/1 var(--font-sans)", color: "var(--gold-600)" }}>{c.p}</div>
              <div style={{ marginTop: 6 }}>
                {c.st === "delivered" ? <Badge tone="success" dot>مُسلَّمة</Badge> : <Badge tone="warning" dot>قيد التسليم</Badge>}
              </div>
            </div>
          </div>
          {c.st === "pending" ? (
            <div className="row gap" style={{ marginTop: 12 }}>
              <button className="btn sm success-ghost" style={{ flex: 1 }}><Ic n="check" size={12}/> مُسلَّمة</button>
              <button className="btn sm secondary" style={{ flex: 1 }}><Ic n="return" size={12}/> مرتجعة</button>
              <button className="btn sm danger-ghost" style={{ flex: 1 }}><Ic n="x" size={12}/> تالفة</button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

Object.assign(window, {
  Dashboard, SheikhsList, SheikhDetail,
  SheikhData, SheikhMaterials, SheikhSchedule, SheikhLessons,
  SheikhAttendance, SheikhExpenses, SheikhCustody,
});
