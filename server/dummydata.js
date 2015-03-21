Meteor.startup(function() {
  if (Posts.find().count() === 0) {
    for (var i = 0; i < 2; i++) {
      Posts.insert({
        url: 'http://meteor.com',
        category: 'links',
        title: 'Корисний ресурс',
        createdAt: new Date
      });
    }
    for (var i = 0; i < 2; i++) {
      Posts.insert({
        category: 'news',
        title: 'Lorem news #' + i,
        content: 'Energistically unleash real-time e-business before exceptional web-readiness. Competently customize low-risk high-yield ROI through prospective synergy. Appropriately pontificate error-free core competencies via corporate content. Monotonectally maintain equity invested web services before long-term high-impact models.',
        createdAt: new Date
      });
    }
    for (var i = 0; i < 2; i++) {
      Posts.insert({
        image: {
          src: 'https://pp.vk.me/c622829/v622829107/2750d/kePDmkuic2Y.jpg',
        },
        category: 'videos',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/EJS_FQnNRgY" frameborder="0" allowfullscreen></iframe>',
        title: 'Lorem videos #' + i
      });
    }
    for (var i = 0; i < 2; i++) {
      Posts.insert({
        image: {
          src: 'https://pp.vk.me/c622829/v622829107/27505/BPfm8_ycdpg.jpg',
        },
        category: 'presentations',
        iframe: '<iframe src="//slides.com/ternopiljs/deck-3-5/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        title: 'Lorem presentations #' + i,
        createdAt: new Date
      });
    }
  }
});