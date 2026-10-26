(function () {
  var LSE = 'https://blogs.lse.ac.uk/impactofsocialsciences/2026/06/12/gendered-ai-design-reflects-and-reinforces-societys-biases/';
  var STATIC = [
    ['nav div a[href="#about"]', '首页'],
    ['nav div a[href="publications.html"]', '论文'],
    ['nav div a[href="talks.html"]', '报告'],
    ['nav div a[href="gallery.html"]', '图集'],
    ['aside h1', '崔浩'],
    ['aside .role', '研究员'],
    ['aside .role + p', '都柏林圣三一大学'],
    ['aside .degree', '网络科学博士<br>中欧大学'],
    ['#about > h2', '关于我'],
    ['#about > p:nth-of-type(1)', '我是一名计算社会科学研究者，现任<a href="https://peoplefinder.tcd.ie/Profile?Username=CUIH1">都柏林圣三一大学</a>研究员，就职于<a href="https://www.tcd.ie/soham/">人与机器社会学研究中心（SOHAM）</a>。我研究在人与机器互动的社会系统中，集体注意力、信念和知识如何涌现与演化。我的工作主要关注网络信息生态，同时也研究职场中的人工智能以及群体决策。'],
    ['#about > p:nth-of-type(2)', '我的研究追踪机器如何在社会生活中扮演越来越主动的角色。在中欧大学攻读<a href="https://networkdatascience.ceu.edu/">网络科学</a>博士期间，我研究了新浪微博的排序算法和平台干预如何决定哪些话题获得公众关注。博士后阶段，我先后在都柏林大学和圣三一大学工作，开始关注作为社会互动参与者的人工智能。我通过建模研究人工智能体的影响力如何改变群体最终形成的信念，并通过在线实验研究人们如何评价处于权威位置的人工智能，结果表明人们对人类管理者的性别偏见同样延续到了人工智能管理者身上。最近，我开始比较人工智能生成的百科与人类撰写的百科，以理解当机器成为共享知识的作者时会发生哪些变化。'],
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
    ['#research-map [data-rm-all="close"]', '全部收起'],
    ['#publications .section-heading h2', '代表性论文'],
    ['#publications .section-heading a', '查看全部论文 →'],
    ['#news h2', '新闻'],
    ['#news li:nth-child(1) time', '2026年6月'],
    ['#news li:nth-child(1) span', '我们的文章 <a href="' + LSE + '">Gendered AI design reflects and reinforces society’s biases</a> 发表于 <em>LSE Impact</em>。'],
    ['#news li:nth-child(2) span', '新论文：与 Taha Yasseri 合作的 <a href="https://doi.org/10.1016/j.chbr.2026.100984">Gender bias in perception of human managers extends to AI managers</a> 发表于 <em>Computers in Human Behavior Reports</em>。'],
    ['#media .section-heading h2', '媒体与图集'],
    ['#media .section-heading a', '全部图集 ↗'],
    ['#media .gallery-frame:nth-child(1) .gallery-caption', '在 DeepTech（中国）接受关于人工智能与理解的采访'],
    ['#media .gallery-frame:nth-child(2) .gallery-caption', '在 The Conversation 发表新文章'],
    ['#media .gallery-frame:nth-child(3) .gallery-caption', '关于 AI 增强集体智能的论文被《麻省理工科技评论》中文版报道'],
    ['#media .gallery-frame:nth-child(4) .gallery-caption', '早期研究被荷兰报纸 de Volkskrant 提及'],
    ['footer a', '返回顶部 ↑'],
    ['.view-label', '查看大图 ⤢']
  ];
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
  function setTheme() {
    var t = document.getElementById('theme-toggle'); if (!t) return;
    var walk = document.createTreeWalker(t, NodeFilter.SHOW_TEXT);
    var n; while ((n = walk.nextNode())) {
      if (window.siteLang === 'zh') n.nodeValue = n.nodeValue.replace(' Light', ' 浅色').replace(' Dark', ' 深色');
      else n.nodeValue = n.nodeValue.replace(' 浅色', ' Light').replace(' 深色', ' Dark');
    }
  }
  if (typeof window.themeLabel === 'function') {
    var orig = window.themeLabel;
    window.themeLabel = function () { orig(); setTheme(); };
  }
  function apply(lang) {
    window.siteLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    if (!window.__enTitle) window.__enTitle = document.title;
    document.title = lang === 'zh' ? '崔浩 | 人机互动与集体智能' : window.__enTitle;
    STATIC.forEach(function (pair) {
      document.querySelectorAll(pair[0]).forEach(function (el) {
        if (!originals.has(el)) originals.set(el, el.innerHTML);
        el.innerHTML = lang === 'zh' ? pair[1] : originals.get(el);
      });
    });
    if (window.rmRerender) window.rmRerender();
    setTheme();
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    try { localStorage.setItem('lang-v1', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.dataset.lang); });
  });
  var saved = 'en';
  try { saved = localStorage.getItem('lang-v1') || 'en'; } catch (e) {}
  if (saved === 'zh') apply('zh');
})();
