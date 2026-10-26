(function () {
  var LSE = 'https://blogs.lse.ac.uk/impactofsocialsciences/2026/06/12/gendered-ai-design-reflects-and-reinforces-societys-biases/';
  var STATIC = [
    ['nav div a[href="#about"], nav div a[href="index.html#about"]', '首页'],
    ['nav div a[href="publications.html"]', '论文'],
    ['nav div a[href="talks.html"]', '报告'],
    ['nav div a[href="gallery.html"]', '图集'],
    ['aside h1', '崔浩'],
    ['aside .role', '研究员'],
    ['aside .role + p', '都柏林圣三一大学'],
    ['aside .degree', '网络科学博士<br>中欧大学'],
    ['#about > h2', '关于我'],
    ['#about > p:nth-of-type(1)', '我是一名计算社会科学研究者，现任<a href="https://peoplefinder.tcd.ie/Profile?Username=CUIH1">都柏林圣三一大学</a>研究员，就职于<a href="https://www.tcd.ie/soham/">人与机器社会学研究中心（SOHAM）</a>。我研究在人与机器互动的社会系统中，集体注意力、信念和知识如何涌现与演化。我的工作主要关注网络信息生态，同时也研究职场中的人工智能以及群体决策。'],
    ['#about > p:nth-of-type(2)', '我的研究追踪机器如何在社会生活中扮演越来越主动的角色。在中欧大学攻读<a href="https://networkdatascience.ceu.edu/">网络科学</a>博士期间，我研究了新浪微博的排序算法和平台干预如何决定哪些话题获得公众关注。博士后阶段，我先后在都柏林大学和圣三一大学工作，开始关注作为社会互动参与者的人工智能。我通过建模研究人工智能体的影响力如何改变群体最终形成的信念，并通过在线实验研究人们如何评价处于权威位置的人工智能。最近，我开始比较人工智能生成的百科与人类撰写的百科，以理解当机器成为共享知识的作者时会发生哪些变化。'],
    ['#about > p:nth-of-type(3)', '在这些项目中，我综合运用网络科学、基于主体的建模、大规模数字痕迹数据和行为实验。我是发表于 <em>Patterns</em> 的综述 <a href="https://doi.org/10.1016/j.patter.2024.101074">AI-enhanced collective intelligence</a> 的第一作者，我们在文中提出了一个多层框架，用于理解人机互动如何塑造集体智能。我的研究也越来越关注人工智能系统的设计，从影响力的大小到外观，如何影响它们所加入的群体的结果。'],
    ['#about > p:nth-of-type(4)', '我的研究曾被 <a href="https://theconversation.com/ai-could-supercharge-human-collective-intelligence-in-everything-from-disaster-relief-to-medical-research-249437">The Conversation</a>、<a href="https://www.volkskrant.nl/kijkverder/v/2022/de-oorlog-volgens-weibo~v492759/">de Volkskrant</a>、<a href="https://www.mittrchina.com/news/detail/13292">《麻省理工科技评论》中文版</a>和 <a href="' + LSE + '">LSE Impact</a> 报道。'],
    ['#about blockquote p', '“真正的危险不在于计算机会开始像人一样思考，而在于人会开始像计算机一样思考。”'],
    ['#about blockquote cite', '—— 西德尼·J·哈里斯'],
    ['#rm-heading', '研究'],
    ['#research-map .rm-lede', '可以在“机器角色”和“研究场景”两种视角之间切换。点击各列查看相关项目，点击项目了解具体内容。'],
    ['#research-map .rm-root strong', '人机社会系统中的集体动力学'],
    ['#research-map .rm-root span', '人与机器互动时，注意力、信念和知识如何涌现与演化'],
    ['#research-map .rm-frame .rm-label', '理论框架'],
    ['#research-map .rm-frame .rm-label + div', '<a href="https://doi.org/10.1016/j.patter.2024.101074">AI-enhanced collective intelligence</a> <span style="color:var(--rm-muted)">（Patterns，2024）</span> &nbsp;·&nbsp; <a href="https://arxiv.org/abs/2610.17487">Behavioural sociology of humans and machines</a> <span style="color:var(--rm-muted)">（Springer Handbook of Hybrid Intelligence，已接收）</span>'],
    ['#research-map [data-rm-view="role"]', '按机器角色'],
    ['#research-map [data-rm-view="setting"]', '按研究场景'],
    ['#research-map [data-rm-all="open"]', '全部展开'],
    ['#research-map [data-rm-all="close"]', '全部收起']
  ];
  var TEXT = {
"About me": "关于我",
"Research": "研究",
"News": "新闻",
"Selected publications": "代表性论文",
"See all publications →": "查看全部论文 →",
"Media &amp; gallery": "媒体与图集",
"Full gallery ↗": "全部图集 ↗",
"View image ⤢": "查看大图 ⤢",
"Interview on AI and understanding, at DeepTech, China": "在 DeepTech（中国）接受关于人工智能与理解的采访",
"New article published in The Conversation": "在 The Conversation 发表新文章",
"Paper on AI-enhanced collective intelligence reported in MIT Tech Review (Chinese edition)": "关于 AI 增强集体智能的论文被《麻省理工科技评论》中文版报道",
"Previous work mentioned in a Dutch newspaper de Volkskrant": "早期研究被荷兰报纸 de Volkskrant 提及",
"New article published in LSE Impact": "在 LSE Impact 发表新文章",
"How do social networks adapt and evolve?": "社交网络如何适应与演化？",
"Donau Knowledge Forum, Montanuniversität Leoben": "多瑙知识论坛，莱奥本矿业大学",
"First Place Winner in Microsoft Policy Hackathon": "微软政策黑客松第一名",
"© Hao Cui <a href=\"#about\">Back to top ↑</a>": "© 崔浩 <a href=\"#about\">返回顶部 ↑</a>",
"© Hao Cui": "© 崔浩",
"Read more ↗": "阅读更多 ↗",
"Search website": "搜索网站",
"Search publications, talks, and more": "搜索论文、报告等内容",
"Type to search the website.": "输入关键词开始搜索。",
"Publications": "论文",
"Journal articles": "期刊论文",
"Book chapters": "书籍章节",
"Working papers": "工作论文",
"Working paper": "工作论文",
"Reports": "报告",
"In Handbook of Hybrid Intelligence, Part 2: Architectures and Methods for Hybrid Intelligence, Springer (accepted)": "收录于 Handbook of Hybrid Intelligence, Part 2: Architectures and Methods for Hybrid Intelligence, Springer（已接收）",
"Industry insights report, Technology Ireland DIGITAL Skillnet": "行业洞察报告，Technology Ireland DIGITAL Skillnet",
"Conferences &amp; presentations": "会议与报告",
"All presentations": "全部类型",
"Talk": "报告",
"Poster": "海报",
"Invited talk": "特邀报告",
"All years": "全部年份",
"Brussels, Belgium": "比利时布鲁塞尔",
"Dublin, Ireland": "爱尔兰都柏林",
"Berlin, Germany": "德国柏林",
"Norrköping, Sweden": "瑞典北雪平",
"Pisa, Italy": "意大利比萨",
"Exeter, United Kingdom": "英国埃克塞特",
"Copenhagen, Denmark": "丹麦哥本哈根",
"Shanghai, China (virtual)": "中国上海（线上）",
"Palma de Mallorca, Spain": "西班牙马略卡岛帕尔马",
"Leoben, Austria": "奥地利莱奥本",
"Virtual": "线上",
"ETH Zurich (virtual)": "苏黎世联邦理工学院（线上）",
"Lyon, France": "法国里昂",
"No presentations match these filters.": "没有符合筛选条件的报告。",
"Jun 2026": "2026年6月",
"Oct 2024": "2024年10月",
"Our article, <a href=\"https://blogs.lse.ac.uk/impactofsocialsciences/2026/06/12/gendered-ai-design-reflects-and-reinforces-societys-biases/\">Gendered AI design reflects and reinforces society’s biases</a>, is published in <em>LSE Impact</em>.": "我们的文章 <a href=\"https://blogs.lse.ac.uk/impactofsocialsciences/2026/06/12/gendered-ai-design-reflects-and-reinforces-societys-biases/\">Gendered AI design reflects and reinforces society’s biases</a> 发表于 <em>LSE Impact</em>。",
"New publication: <a href=\"https://doi.org/10.1016/j.chbr.2026.100984\">Gender bias in perception of human managers extends to AI managers</a>, with Taha Yasseri, in <em>Computers in Human Behavior Reports</em>.": "新论文：与 Taha Yasseri 合作的 <a href=\"https://doi.org/10.1016/j.chbr.2026.100984\">Gender bias in perception of human managers extends to AI managers</a> 发表于 <em>Computers in Human Behavior Reports</em>。",
"<a href=\"https://doi.org/10.3233/faia250681\">Female Managers Are Judged More Harshly Even When They Are AI</a> is published in <em>Frontiers in Artificial Intelligence and Applications</em>.": "<a href=\"https://doi.org/10.3233/faia250681\">Female Managers Are Judged More Harshly Even When They Are AI</a> 发表于 <em>Frontiers in Artificial Intelligence and Applications</em>。",
"Our review, <a href=\"https://doi.org/10.1016/j.patter.2024.101074\">AI-enhanced collective intelligence</a>, is published in <em>Patterns</em>.": "我们的综述 <a href=\"https://doi.org/10.1016/j.patter.2024.101074\">AI-enhanced collective intelligence</a> 发表于 <em>Patterns</em>。",
"Published in PLOS ONE: <a href=\"https://doi.org/10.1371/journal.pone.0286093\">Competition for popularity and interventions on a Chinese microblogging site</a>": "论文发表于 PLOS ONE：<a href=\"https://doi.org/10.1371/journal.pone.0286093\">Competition for popularity and interventions on a Chinese microblogging site</a>",
"Published in Physica A: <a href=\"https://doi.org/10.1016/j.physa.2023.128724\">“Born in Rome” or “Sleeping Beauty”: Emergence of hashtag popularity on the Chinese microblog Sina Weibo</a>": "论文发表于 Physica A：<a href=\"https://doi.org/10.1016/j.physa.2023.128724\">“Born in Rome” or “Sleeping Beauty”: Emergence of hashtag popularity on the Chinese microblog Sina Weibo</a>",
"Presented at the <a href=\"https://www.pasconet.at/2022/07/11/%E7%AC%AC%E4%B8%83%E5%B1%8A%E5%A4%9A%E7%91%99%E7%9F%A5%E8%AF%86%E8%AE%BA%E5%9D%9B-%E6%97%85%E5%A5%A5%E7%A7%91%E6%8A%80%E4%BA%BA%E5%91%98%E5%AD%A6%E6%9C%AF%E4%BA%A4%E6%B5%81-%E6%88%90%E5%8A%9F%E5%9C%A8%E8%8E%B1%E5%A5%A5%E6%9C%AC%E5%A4%A7%E5%AD%A6%E5%8F%AC%E5%BC%80/\">Donau Knowledge Forum, Montanuniversität Leoben</a>": "在<a href=\"https://www.pasconet.at/2022/07/11/%E7%AC%AC%E4%B8%83%E5%B1%8A%E5%A4%9A%E7%91%99%E7%9F%A5%E8%AF%86%E8%AE%BA%E5%9D%9B-%E6%97%85%E5%A5%A5%E7%A7%91%E6%8A%80%E4%BA%BA%E5%91%98%E5%AD%A6%E6%9C%AF%E4%BA%A4%E6%B5%81-%E6%88%90%E5%8A%9F%E5%9C%A8%E8%8E%B1%E5%A5%A5%E6%9C%AC%E5%A4%A7%E5%AD%A6%E5%8F%AC%E5%BC%80/\">多瑙知识论坛（莱奥本矿业大学）</a>作报告",
"Published in EPJ Data Science: <a href=\"https://doi.org/10.1140/epjds/s13688-021-00263-0\">Attention dynamics on the Chinese social media Sina Weibo during the COVID-19 pandemic</a>": "论文发表于 EPJ Data Science：<a href=\"https://doi.org/10.1140/epjds/s13688-021-00263-0\">Attention dynamics on the Chinese social media Sina Weibo during the COVID-19 pandemic</a>",
"First-place team at the <a href=\"https://networkdatascience.ceu.edu/article/2019-11-18/1st-place-team-ceu-dnds-student-microsoft-hackathon-hack4ideas\">Microsoft Policy Hackathon</a>": "所在团队获得<a href=\"https://networkdatascience.ceu.edu/article/2019-11-18/1st-place-team-ceu-dnds-student-microsoft-hackathon-hack4ideas\">微软政策黑客松</a>第一名"
};
  var TEXT_SEL = 'h2, .section-heading > a, h3.pub-group-title, .publication .venue, .news-list time, .news-list li > span, .gallery-caption, .view-label, .presentation-kind, .presentation .venue, #presentation-empty, footer, #viewer-link, label[for=search-input], #search-status';
  var TITLES = {
    'Hao Cui | Human–AI interaction & collective intelligence': '崔浩 | 人机互动与集体智能',
    'Publications | Hao Cui': '论文 | 崔浩', 'Talks | Hao Cui': '报告 | 崔浩', 'Media & gallery | Hao Cui': '媒体与图集 | 崔浩',
    'News | Hao Cui': '新闻 | 崔浩', 'Welcome to Hao Cui’s World': '欢迎来到崔浩的世界'
  };
  var CATS = { Home: '首页', Publications: '论文', Talks: '报告', Gallery: '图集', News: '新闻' };
  window.ZH_STR = {
    'Information curator': '信息策展者', 'Social actor': '社会行动者', 'Knowledge producer': '知识生产者',
    'Collective attention': '集体注意力', 'Belief and social evaluation': '信念与社会评价', 'Collective knowledge': '集体知识',
    'How do algorithms and platforms decide what crowds pay attention to?': '算法和平台如何决定人们关注什么？',
    'When AI joins the interaction, how do groups form beliefs and grant authority?': '当人工智能加入互动，群体如何形成信念、赋予权威？',
    'What changes when a machine writes the knowledge we share?': '当机器书写我们共享的知识，会发生什么变化？',
    'Information ecosystems': '信息生态', 'Workplaces and authority': '职场与权威', 'Collective decision-making': '集体决策',
    'Social media, fact-checking, encyclopedias': '社交媒体、事实核查、百科全书',
    'AI managers, teams, organisations': '人工智能管理者、团队、组织',
    'Opinion dynamics in human–AI groups': '人机群体中的意见动力学',
    'How do algorithms and AI change which information is seen, checked, and written?': '算法和人工智能如何改变哪些信息被看见、被核查和被书写？',
    'How do people judge and work with AI in positions of authority?': '人们如何评价处于权威位置的人工智能，又如何与之共事？',
    'How does the influence of AI shape what groups come to believe and decide?': '人工智能的影响力如何塑造群体最终的信念与决定？',
    'Working paper': '工作论文', 'Work in progress': '进行中', 'Read the paper': '阅读论文', 'Read the report': '阅读报告',
    ' project': ' 个项目', ' projects': ' 个项目',
    "Weibo's Hot Search List is an algorithmically ranked gateway to public attention. This paper traces how collective attention was allocated and how quickly it faded during the pandemic, drawing on large-scale platform data.": '微博热搜榜是经由算法排序的公众注意力入口。本文基于大规模平台数据，追踪了疫情期间集体注意力如何分配、又以多快的速度消退。',
    'Asks how a hashtag becomes popular by linking the evolution of its repost network to its trajectory on the trending list.': '本文将话题标签转发网络的演化与其在热搜榜上的轨迹联系起来，探讨一个话题标签如何走红。',
    'Shows how platform interventions reshape the competition among topics for public attention, an early look at how non-human actors steer collective outcomes.': '本文展示了平台干预如何重塑话题之间对公众注意力的竞争，是对非人类行动者如何左右集体结果的早期考察。',
    'Places AI agents with adjustable influence inside an opinion dynamics model and shows how tuning that influence changes the beliefs that mixed human–AI populations converge on.': '本文在意见动力学模型中引入影响力可调的人工智能体，展示了调节这种影响力如何改变人机混合群体最终收敛的信念。',
    'Online experiments show that female managers are judged more harshly, and that the bias persists when the manager is an AI. When machines take on positions of authority, existing social hierarchies travel with them.': '在线实验表明，女性管理者会受到更严苛的评价，而当管理者是人工智能时，这种偏见依然存在。机器占据权威位置时，原有的社会等级也随之延续。',
    'Tests how the visual design of an AI manager changes the way people evaluate it, with implications for how AI in social roles should be designed.': '本文检验人工智能管理者的视觉设计如何改变人们对它的评价，并讨论了承担社会角色的人工智能应当如何设计。',
    'Examines community fact-checking on Twitter/X, where an algorithm aggregates the judgements of many contributors into a shared verdict on what is misleading.': '本文考察推特/X 上的社区事实核查：算法把众多贡献者的判断汇总为对误导性内容的共同结论。',
    'Looks at how Irish organisations bring AI into their workforce and how human–machine partnerships are taking shape in practice.': '本报告考察爱尔兰的组织如何将人工智能引入员工队伍，以及人机协作在实践中如何成形。',
    'Compares the AI-generated Grokipedia with the collaboratively written Wikipedia to understand how knowledge is framed, sourced, and justified when an AI becomes its author.': '比较人工智能生成的 Grokipedia 与协作撰写的 Wikipedia，以理解当人工智能成为作者时，知识如何被组织、引证和论证。'
  };
  var originals = new Map();
  function swap(el, zh, lang) {
    if (!originals.has(el)) originals.set(el, el.innerHTML);
    el.innerHTML = lang === 'zh' ? zh : originals.get(el);
  }
  function firstText(el, en, zh, lang) {
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3 && n.nodeValue.trim()) { n.nodeValue = lang === 'zh' ? zh : en; return; }
    }
  }
  function countText() {
    var c = document.getElementById('presentation-count'); if (!c) return;
    var m = c.textContent.match(/\d+/); if (!m) return;
    c.textContent = window.siteLang === 'zh' ? '共 ' + m[0] + ' 场' : m[0] + (m[0] === '1' ? ' presentation' : ' presentations');
  }
  function searchText() {
    if (window.siteLang !== 'zh') return;
    var s = document.getElementById('search-status');
    if (s) {
      var t = s.textContent, m = t.match(/^(\d+) results$/);
      if (t === 'Type to search the website.') s.textContent = TEXT[t];
      else if (t === 'No results. Try a different keyword.') s.textContent = '没有结果，请换个关键词。';
      else if (m) s.textContent = '共 ' + m[1] + ' 个结果';
    }
    document.querySelectorAll('#search-results small').forEach(function (e) { if (CATS[e.textContent]) e.textContent = CATS[e.textContent]; });
  }
  function apply(lang) {
    window.siteLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    if (!window.__enTitle) window.__enTitle = document.title;
    document.title = lang === 'zh' && TITLES[window.__enTitle] ? TITLES[window.__enTitle] : window.__enTitle;
    STATIC.forEach(function (pair) {
      document.querySelectorAll(pair[0]).forEach(function (el) { swap(el, pair[1], lang); });
    });
    document.querySelectorAll(TEXT_SEL).forEach(function (el) {
      var key = originals.has(el) ? originals.get(el).trim() : el.innerHTML.trim();
      if (TEXT[key]) swap(el, TEXT[key], lang);
    });
    document.querySelectorAll('.profile-links a').forEach(function (a) {
      if (/mailto:/.test(a.href)) firstText(a, 'Email', '邮箱', lang);
    });
    var input = document.getElementById('search-input');
    if (input) input.placeholder = lang === 'zh' ? '例如：AI、网络、注意力' : 'e.g. AI, networks, attention';
    document.querySelectorAll('.image-open').forEach(function (b) {
      if (!b.dataset.captionEn) b.dataset.captionEn = b.dataset.caption;
      var zh = TEXT[b.dataset.captionEn];
      b.dataset.caption = lang === 'zh' && zh ? zh : b.dataset.captionEn;
      b.setAttribute('aria-label', (lang === 'zh' ? '查看大图：' : 'Enlarge image: ') + b.dataset.caption);
    });
    document.querySelectorAll('.presentation-controls label').forEach(function (l) {
      var sel = l.querySelector('select'); if (!sel) return;
      if (sel.id === 'presentation-type') firstText(l, 'Type ', '类型 ', lang);
      if (sel.id === 'presentation-year') firstText(l, 'Year ', '年份 ', lang);
      Array.prototype.forEach.call(sel.options, function (o) {
        if (!o.dataset.en) { o.dataset.en = o.textContent; if (!o.hasAttribute('value')) o.value = o.textContent; }
        o.textContent = lang === 'zh' && TEXT[o.dataset.en] ? TEXT[o.dataset.en] : o.dataset.en;
      });
    });
    countText();
    var w = document.querySelector('.welcome-line'), n = document.querySelector('.name-line'), e = document.querySelector('.academic-entrance');
    if (w) swap(w, '欢迎来到', lang);
    if (n) swap(n, '崔浩的世界', lang);
    if (e) firstText(e, 'Enter Academia ', '进入学术世界 ', lang);
    if (window.rmRerender) window.rmRerender();
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    try { localStorage.setItem('lang-v1', lang); } catch (err) {}
  }
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.dataset.lang); });
  });
  ['presentation-type', 'presentation-year'].forEach(function (id) {
    var s = document.getElementById(id); if (s) s.addEventListener('change', countText);
  });
  var si = document.getElementById('search-input'); if (si) si.addEventListener('input', searchText);
  var saved = 'en';
  try { saved = localStorage.getItem('lang-v1') || 'en'; } catch (err) {}
  if (saved === 'zh') apply('zh');
})();
