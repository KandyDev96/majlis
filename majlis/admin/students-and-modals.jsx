// Majlis Admin — Students list, Student detail + 7 sub-sections, Add-Session modal

// ═══════════════ 3.4 STUDENTS LIST ═══════════════
const StudentsList = () => (
  <div className="scr">
    <StatusSpacer/>
    <div className="subhead">
      <div className="back"><Ic n="back" size={18}/></div>
      <div className="titles">
        <div className="crumb">الإدارة</div>
        <div className="h">الطلاب</div>
      </div>
      <div className="trail">
        <div className="back" style={{ background: "var(--brand)", color: "#fff", border: 0 }}><Ic n="add" size={18}/></div>
      </div>
    </div>

    <div className="search">
      <Ic n="search" size={18} color="var(--fg-faint)"/>
      <input placeholder="ابحث عن طالب، كود، منطقة…"/>
      <div className="filter-btn"><Ic n="filter" size={14}/></div>
    </div>

    <div className="row between" style={{ padding: "16px 24px 4px" }}>
      <span className="muted" style={{ font: "600 12px/1 var(--font-sans)" }}>٢٤٧ طالب نشط</span>
      <span className="muted" style={{ font: "600 12px/1 var(--font-sans)" }}>الترتيب: الأحدث</span>
    </div>

    <div className="scrollwrap no-tab" style={{ padding: "8px 20px 24px" }}>
      {[
        { i: "أ", n: "أحمد سعد العنزي",      k: "ST-0124", r: "الرياض",  pct: 92, m: "تفسير وحديث",  c: "olive" },
        { i: "م", n: "محمد عبدالله الشمري",  k: "ST-0125", r: "جدة",     pct: 88, m: "علوم القرآن",  c: "gold" },
        { i: "س", n: "سلطان فهد القحطاني",   k: "ST-0126", r: "الدمام",  pct: 64, m: "الفقه",        c: "blue" },
        { i: "خ", n: "خالد ناصر المطيري",    k: "ST-0127", r: "الرياض",  pct: 76, m: "تفسير وحديث",  c: "purple" },
        { i: "ع", n: "عبدالعزيز الحربي",     k: "ST-0128", r: "مكة",     pct: 38, m: "السيرة",       c: "olive" },
        { i: "ي", n: "يوسف بدر الزهراني",    k: "ST-0129", r: "الطائف",  pct: 95, m: "التجويد",      c: "gold" },
      ].map((st, i) => {
        const tone = st.pct >= 70 ? "green" : st.pct >= 40 ? "warn" : "danger";
        return (
          <div key={i} className="list-card">
            <div className={"avatar-lg " + st.c}>{st.i}</div>
            <div className="body">
              <div className="row between">
                <div className="name">{st.n}</div>
                <Chev/>
              </div>
              <div className="muted row gap" style={{ font: "500 12px/1.3 var(--font-sans)", marginTop: 4 }}>
                <span style={{ font: "700 12px/1 var(--font-sans)", color: "var(--brand-700)" }}>{st.k}</span>
                <span>·</span>
                <span><Ic n="pin" size={10}/> {st.r}</span>
              </div>
              <div className="row gap" style={{ marginTop: 10, alignItems: "center" }}>
                <div className={"progress " + tone} style={{ flex: 1, height: 6 }}>
                  <div style={{ width: st.pct + "%" }}/>
                </div>
                <div style={{ font: "800 12px/1 var(--font-sans)", color: tone === "danger" ? "var(--danger)" : tone === "warn" ? "var(--warning)" : "var(--success)" }}>
                  {st.pct}٪
                </div>
              </div>
              <div className="row gap" style={{ marginTop: 8 }}>
                <Badge tone="olive">{st.m}</Badge>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <TabBar active={1}/>
  </div>
);

// ═══════════════ 3.5 STUDENT DETAIL — Index ═══════════════
const StudentDetail = () => (
  <div className="scr">
    <StatusSpacer/>
    <div className="subhead">
      <div className="back"><Ic n="back" size={18}/></div>
      <div className="titles">
        <div className="crumb">الطلاب</div>
        <div className="h">ملف الطالب</div>
      </div>
      <div className="trail"><div className="back"><Ic n="more" size={18}/></div></div>
    </div>

    <div className="scrollwrap no-tab">
      <div className="profile-hero">
        <div className="ph-row">
          <div className="ph-avatar">أ</div>
          <div style={{ flex: 1 }}>
            <div className="ph-name">أحمد سعد العنزي</div>
            <div className="ph-meta">ST-0124 · الرياض</div>
            <div className="ph-tags">
              <span className="ph-tag gold">تفسير وحديث</span>
              <span className="ph-tag"><Ic n="check" size={11}/> نشط</span>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-row" style={{ marginTop: 18 }}>
        <CStat tone="olive" icon="check" value="٩٢٪" label="الحضور"/>
        <CStat tone="blue"  icon="award" value="١٤"  label="النشاطات"/>
      </div>
      <div className="stats-row" style={{ marginTop: 10, gridTemplateColumns: "1fr" }}>
        <CStat tone="gold"  icon="starF" value="٤.٨ / ٥" label="التقييم العام" delta="ممتاز"/>
      </div>

      <div className="subdivider">أقسام الملف</div>

      <div className="inset-list">
        <div className="inset-row">
          <div className="ic"><Ic n="user" size={18}/></div>
          <div className="body"><div className="t">بيانات الطالب</div><div className="s">الاسم، الهوية، السكن، الحالة</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic info"><Ic n="cal" size={18}/></div>
          <div className="body"><div className="t">سجل الحضور</div><div className="s">٤٦ حاضر · ٤ غائب · ٢ متأخر</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic gold"><Ic n="wallet" size={18}/></div>
          <div className="body"><div className="t">المصاريف</div><div className="s">١,٢٥٠ ر.س مدفوع</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic warn"><Ic n="bag" size={18}/></div>
          <div className="body"><div className="t">العهد</div><div className="s">٣ عهد · ١ قيد التسليم</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic purple"><Ic n="award" size={18}/></div>
          <div className="body"><div className="t">النشاطات المقدمة</div><div className="s">١٢ مقبولة · ٢ قيد المراجعة</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic danger"><Ic n="file" size={18}/></div>
          <div className="body"><div className="t">الملفات المرفوعة</div><div className="s">٨ ملفات — ٢٤ ميجا</div></div>
          <div className="chev"><Chev/></div>
        </div>
        <div className="inset-row">
          <div className="ic gold"><Ic n="starF" size={18}/></div>
          <div className="body"><div className="t">التقييمات</div><div className="s">تلقائي + بشري</div></div>
          <div className="chev"><Chev/></div>
        </div>
      </div>
      <div className="spacer-20"/>
    </div>
  </div>
);

// ═══════════════ 3.5.1 STUDENT DATA ═══════════════
const StudentData = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="أحمد العنزي" title="بيانات الطالب"/>

    <div className="stats-row">
      <CStat tone="olive" icon="cal"   value="٤٦" label="درس حضره" soft/>
      <CStat tone="gold"  icon="starF" value="٤.٨" label="متوسط التقييم" soft/>
    </div>

    <div style={{ padding: "20px 20px 0" }}>
      <div className="field">
        <div className="lbl">الاسم الثلاثي</div>
        <input className="input" defaultValue="أحمد سعد العنزي"/>
      </div>
      <div className="input-row">
        <div className="field">
          <div className="lbl">رقم الهوية</div>
          <input className="input" defaultValue="١٠٢٣٤٥٦٧٨٩"/>
        </div>
        <div className="field">
          <div className="lbl">رقم الجوال</div>
          <input className="input" defaultValue="+966 50 998 8776"/>
        </div>
      </div>
      <div className="field">
        <div className="lbl">المؤهل الدراسي</div>
        <div className="select">طالب جامعي — السنة الثانية <Ic n="chevDown" size={14} color="var(--fg-muted)"/></div>
      </div>
      <div className="input-row">
        <div className="field">
          <div className="lbl">حفظ القرآن</div>
          <div className="select">١٢ جزءاً <Ic n="chevDown" size={14} color="var(--fg-muted)"/></div>
        </div>
        <div className="field">
          <div className="lbl">مكان السكن</div>
          <div className="select">حي الملقا <Ic n="chevDown" size={14} color="var(--fg-muted)"/></div>
        </div>
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

// ═══════════════ 3.5.2 STUDENT ATTENDANCE ═══════════════
const StudentAttendance = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="أحمد العنزي" title="سجل الحضور"/>

    <div className="stats-row">
      <CStat tone="green"  icon="check" value="٤٦" label="حاضر" soft/>
      <CStat tone="danger" icon="x"     value="٤"  label="غائب" soft/>
    </div>
    <div className="stats-row" style={{ marginTop: 10, gridTemplateColumns: "1fr" }}>
      <CStat tone="orange" icon="clock" value="٢" label="متأخر" soft delta="٤٪"/>
    </div>

    <div className="section">
      <div className="row between" style={{ marginBottom: 10 }}>
        <div style={{ font: "600 13px/1 var(--font-sans)" }}>نسبة الحضور</div>
        <div style={{ font: "800 14px/1 var(--font-sans)", color: "var(--success)" }}>٩٢٪</div>
      </div>
      <div className="progress green"><div style={{ width: "92%" }}/></div>

      <div className="row gap" style={{ marginTop: 14 }}>
        <button className="btn sm secondary" style={{ flex: 1 }}><Ic n="pdf" size={14}/> تصدير PDF</button>
        <button className="btn sm secondary" style={{ flex: 1 }}><Ic n="excel" size={14}/> تصدير Excel</button>
      </div>
    </div>

    <div className="section">
      <div className="section-head"><div className="title">السجل التفصيلي</div></div>
      {[
        { t: "تفسير الكهف #٣٢", d: "١٥ مارس", st: "حاضر", tone: "success" },
        { t: "البخاري #١٤",     d: "٨ مارس",  st: "حاضر", tone: "success" },
        { t: "بلوغ المرام #٨",  d: "٥ مارس",  st: "متأخر", tone: "warning" },
        { t: "تفسير الكهف #٣١", d: "١ مارس",  st: "غائب",  tone: "danger" },
        { t: "البخاري #١٣",     d: "٢٢ فبراير", st: "حاضر", tone: "success" },
      ].map((r, i) => (
        <div key={i} className="card card-row" style={{ padding: "12px 14px" }}>
          <span className="s-dot" style={{
            background: r.tone === "success" ? "var(--success)" : r.tone === "warning" ? "var(--warning)" : "var(--danger)",
            margin: 0,
          }}/>
          <div className="body">
            <div className="t" style={{ fontSize: 14 }}>{r.t}</div>
            <div className="s">{r.d}</div>
          </div>
          <Badge tone={r.tone}>{r.st}</Badge>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.5.3 STUDENT FEES ═══════════════
const StudentFees = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="أحمد العنزي" title="المصاريف"/>

    <div className="hero">
      <div className="h-eyebrow">إجمالي المدفوع</div>
      <div className="row between" style={{ alignItems: "flex-end" }}>
        <div className="h-title" style={{ fontSize: 32, marginTop: 8 }}>١,٢٥٠ ر.س</div>
        <Badge tone="gold">السنة ١٤٤٦</Badge>
      </div>
      <div className="h-sub">آخر دفعة قبل ٣ أيام · ٧ عمليات</div>
    </div>

    <div className="section">
      <div className="section-head"><div className="title">المدفوعات</div></div>
      {[
        { t: "رسوم اشتراك ربيع",  d: "٥ مارس",   amt: "٤٠٠", st: "paid" },
        { t: "رسوم كتب ومراجع",   d: "١ مارس",   amt: "١٥٠", st: "paid" },
        { t: "رسوم نشاطات",       d: "٢٥ فبراير", amt: "٢٠٠", st: "paid" },
        { t: "رسوم اشتراك صيف",    d: "اليوم",    amt: "٥٠٠", st: "pending" },
      ].map((f, i) => (
        <div key={i} className="card card-row">
          <div className={"ic " + (f.st === "paid" ? "gold" : "warn")}><Ic n="wallet" size={18}/></div>
          <div className="body">
            <div className="t">{f.t}</div>
            <div className="s">{f.d}</div>
          </div>
          <div style={{ textAlign: "end" }}>
            <div style={{ font: "800 15px/1 var(--font-sans)", color: f.st === "paid" ? "var(--brand)" : "var(--warning)" }}>{f.amt}</div>
            <div style={{ marginTop: 6 }}>
              {f.st === "paid" ? <Badge tone="success" dot>مدفوع</Badge> : <Badge tone="warning" dot>معلق</Badge>}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.5.4 STUDENT CUSTODY ═══════════════
const StudentCustody = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="أحمد العنزي" title="العهد"
      trail={<div className="back" style={{ background: "var(--brand)", color: "#fff", border: 0 }}><Ic n="add" size={18}/></div>}/>

    <div className="stats-row">
      <CStat tone="olive" icon="bag"   value="٣" label="إجمالي" soft/>
      <CStat tone="green" icon="check" value="٢" label="مُسلَّمة" soft/>
    </div>
    <div className="stats-row" style={{ marginTop: 10, gridTemplateColumns: "1fr" }}>
      <CStat tone="orange" icon="clock" value="١" label="قيد التسليم" soft/>
    </div>

    <div className="section">
      <div className="section-head"><div className="title">العهد</div></div>
      {[
        { t: "مصحف مجلد فاخر", p: "١٤٠ ر.س", d: "١٠ مارس", st: "delivered" },
        { t: "كتاب الأذكار",   p: "٣٥ ر.س",  d: "١ مارس",   st: "delivered" },
        { t: "ساعة حلقات",     p: "٢١٠ ر.س", d: "اليوم",     st: "pending" },
      ].map((c, i) => (
        <div key={i} className="card">
          <div className="row between">
            <div>
              <div style={{ font: "700 15px/1.2 var(--font-sans)" }}>{c.t}</div>
              <div className="muted" style={{ font: "500 12px/1.3 var(--font-sans)", marginTop: 4 }}>{c.d}</div>
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
              <button className="btn sm danger-ghost" style={{ flex: 1 }}><Ic n="x" size={12}/> تالفة</button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.5.5 STUDENT ACTIVITIES ═══════════════
const StudentActivities = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="أحمد العنزي" title="النشاطات المقدمة"/>

    <div className="stats-row">
      <CStat tone="green"  icon="check" value="١٢" label="مقبول" soft/>
      <CStat tone="danger" icon="x"     value="٠"  label="مرفوض" soft/>
    </div>
    <div className="stats-row" style={{ marginTop: 10, gridTemplateColumns: "1fr" }}>
      <CStat tone="orange" icon="clock" value="٢" label="قيد المراجعة" soft/>
    </div>

    <div className="section">
      <div className="section-head"><div className="title">النشاطات</div></div>

      {[
        { t: "حفظ سورة الكهف",     d: "١٢ مارس", st: "مقبول", tone: "success", grade: 5 },
        { t: "بحث: آداب طلب العلم", d: "٥ مارس",  st: "مقبول", tone: "success", grade: 4 },
        { t: "مسابقة التجويد",      d: "١ مارس",  st: "قيد المراجعة", tone: "warning" },
        { t: "خطبة قصيرة",          d: "٢٥ فبراير", st: "مقبول", tone: "success", grade: 5 },
      ].map((a, i) => (
        <div key={i} className={"rail-card " + (a.tone === "warning" ? "warn" : a.tone === "success" ? "success" : "")} style={{ marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <div className="row between">
              <div style={{ font: "700 14px/1.2 var(--font-sans)" }}>{a.t}</div>
              <Badge tone={a.tone}>{a.st}</Badge>
            </div>
            <div className="muted" style={{ font: "500 12px/1.3 var(--font-sans)", marginTop: 4 }}>{a.d}</div>
            {a.grade ? (
              <div className="row gap" style={{ marginTop: 8 }}>
                <Stars value={a.grade} size={13}/>
                <span style={{ font: "700 12px/1 var(--font-sans)", color: "var(--gold-600)" }}>{a.grade}.٠</span>
              </div>
            ) : (
              <button className="btn sm primary" style={{ marginTop: 10 }}><Ic n="check" size={12}/> مراجعة</button>
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.5.6 STUDENT FILES ═══════════════
const StudentFiles = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="أحمد العنزي" title="الملفات المرفوعة"/>

    <div className="muted" style={{ padding: "8px 24px 12px", font: "600 12px/1 var(--font-sans)" }}>
      ٨ ملفات · ٢٤ ميجابايت
    </div>

    <div className="file-grid">
      {[
        { n: "بحث آداب طلب العلم.pdf", k: "PDF", sz: "٢.٤ MB", d: "٥ مارس", c: "pdf" },
        { n: "تلاوة سورة الكهف.mp3", k: "صوت", sz: "٨.٧ MB", d: "٣ مارس", c: "aud" },
        { n: "خطة الحفظ.docx",     k: "DOC",  sz: "٥٤٠ KB", d: "١ مارس", c: "doc" },
        { n: "شهادة الحضور.pdf",   k: "PDF",  sz: "١.١ MB", d: "٢٠ فبراير", c: "pdf" },
        { n: "صورة الهوية.jpg",     k: "صورة", sz: "٢.٢ MB", d: "١٠ فبراير", c: "img" },
        { n: "تسجيل الخطبة.mp3",   k: "صوت", sz: "٤.٢ MB", d: "٥ فبراير",  c: "aud" },
      ].map((f, i) => (
        <div key={i} className="file-card">
          <div className={"fi " + f.c}>
            <Ic n={f.c === "pdf" ? "pdf" : f.c === "aud" ? "audio" : f.c === "doc" ? "file" : "file"} size={18}/>
          </div>
          <div>
            <div className="fname" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.n}</div>
            <div className="fmeta">{f.d} · {f.sz}</div>
          </div>
          <div className="fbottom">
            <Badge tone={f.c === "pdf" ? "danger" : f.c === "doc" ? "info" : f.c === "aud" ? "gold" : "success"}>{f.k}</Badge>
            <div style={{ color: "var(--fg-faint)" }}><Ic n="download" size={16}/></div>
          </div>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ 3.5.7 STUDENT EVALUATIONS ═══════════════
const StudentEvaluations = () => (
  <div className="scr">
    <StatusSpacer/>
    <SubHead crumb="أحمد العنزي" title="التقييمات"/>

    <div className="stats-row">
      <CStat tone="olive" icon="trend" value="٤.٧" label="تقييم تلقائي" soft delta="ممتاز"/>
      <CStat tone="gold"  icon="starF" value="٤.٩" label="تقييم بشري"  soft delta="ممتاز"/>
    </div>

    <div className="section">
      <div className="section-head">
        <div className="title">المقارنة الشهرية</div>
        <div className="row gap">
          <span className="legend"><span className="ld" style={{ background: "var(--brand)" }}/> تلقائي</span>
          <span className="legend"><span className="ld" style={{ background: "var(--gold-400)" }}/> بشري</span>
        </div>
      </div>
      <div className="chart-card">
        <div className="minibar">
          {[
            [55, 70], [62, 75], [70, 80], [74, 84], [82, 88], [88, 92], [92, 96],
          ].map(([a, b], i) => (
            <div key={i} className="col">
              <div className="b" style={{ height: a + "%", background: "var(--brand)" }}/>
              <div className="b" style={{ height: b + "%", background: "var(--gold-400)" }}/>
            </div>
          ))}
        </div>
        <div className="chart-labels" style={{ marginTop: 10 }}>
          <div>محرم</div><div>صفر</div><div>ربيع١</div><div>ربيع٢</div><div>جمادى١</div><div>جمادى٢</div><div>رجب</div>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="section-head"><div className="title">تقييم الشيخ التفصيلي</div></div>
      {[
        { c: "الحفظ والمراجعة", r: 5, q: "حفظ متقن ومستوى مراجعة عالي، ملتزم بالخطة الأسبوعية." },
        { c: "الأخلاق والسلوك", r: 5, q: "خلوق ومحبوب بين زملائه، يبادر بمساعدة الجميع." },
        { c: "التجويد والأداء", r: 4, q: "أداء جيد مع ملاحظات على أحكام المدود تحتاج مراجعة." },
        { c: "الالتزام بالحضور", r: 5, q: "منتظم في الحضور، ولم يتغيب إلا بعذر." },
      ].map((e, i) => (
        <div key={i} className="card" style={{ marginBottom: 10 }}>
          <div className="row between">
            <div style={{ font: "700 14px/1 var(--font-sans)" }}>{e.c}</div>
            <Stars value={e.r} size={14}/>
          </div>
          <div className="quote" style={{ marginTop: 10 }}>{e.q}</div>
        </div>
      ))}
    </div>
    <div className="spacer-20"/>
  </div>
);

// ═══════════════ MODAL: Add Session ═══════════════
const AddSessionModal = () => (
  <div className="scr">
    <StatusSpacer/>
    <Dashboard/>
    {/* The above won't actually render — we replicate the dashboard look behind the sheet via a faded snapshot */}
  </div>
);

// We'll instead make the modal as a self-contained sheet over the dashboard.
const AddSession = () => (
  <div className="scr" style={{ position: "relative" }}>
    {/* dimmed dashboard background — use a static screenshot-like placeholder */}
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", filter: "blur(0px) brightness(0.65)" }}>
      <Dashboard/>
    </div>

    <div className="sheet-overlay"/>
    <div className="sheet" style={{ height: "82%" }}>
      <div className="grabber"/>
      <h3>إضافة جلسة جديدة</h3>
      <div className="sheet-scroll">
        <div className="field">
          <div className="lbl">نوع الجلسة</div>
          <div className="type-picker">
            <div className="type-card active">
              <div className="tc-ic"><Ic n="book" size={18}/></div>
              <div className="tc-lbl">درس علمي</div>
            </div>
            <div className="type-card">
              <div className="tc-ic"><Ic n="users" size={18}/></div>
              <div className="tc-lbl">اجتماع</div>
            </div>
            <div className="type-card">
              <div className="tc-ic"><Ic n="mic" size={18}/></div>
              <div className="tc-lbl">محاضرة</div>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="lbl">المادة العلمية</div>
          <div className="select">تفسير ابن كثير <Ic n="chevDown" size={14} color="var(--fg-muted)"/></div>
        </div>
        <div className="field">
          <div className="lbl">عنوان الجلسة</div>
          <input className="input" placeholder="تفسير الآيات ١٢١–١٤٠ من الكهف"/>
        </div>
        <div className="input-row">
          <div className="field">
            <div className="lbl">التاريخ</div>
            <div className="select">١٧ رمضان <Ic n="cal" size={14} color="var(--fg-muted)"/></div>
          </div>
          <div className="field">
            <div className="lbl">الوقت</div>
            <div className="select">٥:٢٠ ص <Ic n="clock" size={14} color="var(--fg-muted)"/></div>
          </div>
        </div>
        <div className="field">
          <div className="lbl">المكان</div>
          <input className="input" defaultValue="مسجد الفاروق — قاعة الدراسة"/>
        </div>
        <div className="field">
          <div className="lbl">الشيخ</div>
          <div className="select">الشيخ عبدالله المالكي <Ic n="chevDown" size={14} color="var(--fg-muted)"/></div>
        </div>

        <div className="tg-row" style={{ borderTop: "1px solid var(--border-soft)", paddingTop: 14 }}>
          <div>
            <div className="tg-lbl">إرسال إشعار للطلاب</div>
            <div className="tg-hint">سيُرسل إشعار فوري لـ ٤٢ طالب</div>
          </div>
          <div className="toggle on"/>
        </div>

        <button className="btn primary block" style={{ marginTop: 18 }}>إنشاء الجلسة</button>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  StudentsList, StudentDetail,
  StudentData, StudentAttendance, StudentFees, StudentCustody,
  StudentActivities, StudentFiles, StudentEvaluations,
  AddSession,
});
