class Category {
  Category({
    this.title = '',
    this.imagePath = '',
    this.lessonCount = 0,
    this.date = '',
    this.rating = 0.0,
  });

  String title;
  int lessonCount;
  String date;
  double rating;
  String imagePath;

  static List<Category> categoryList = <Category>[
    Category(
      imagePath: 'assets/design_course/interFace1.png',
      title: 'User interface Design',
      lessonCount: 24,
      date: '25/9',
      rating: 4.3,
    ),
    Category(
      imagePath: 'assets/design_course/interFace2.png',
      title: 'User interface Design',
      lessonCount: 22,
      date: '26/9',
      rating: 4.6,
    ),
    Category(
      imagePath: 'assets/design_course/interFace1.png',
      title: 'User interface Design',
      lessonCount: 24,
      date: '27/9',
      rating: 4.3,
    ),
    Category(
      imagePath: 'assets/design_course/interFace2.png',
      title: 'User interface Design',
      lessonCount: 22,
      date: '28/9',
      rating: 4.6,
    ),
  ];

  static List<Category> popularCourseList = <Category>[
    
    Category(
      imagePath: 'assets/design_course/interFace3.png',
      title: 'App Design Course',
      lessonCount: 12,
      date: '27/9',
      rating: 4.8,
    ),
    Category(
      imagePath: 'assets/design_course/interFace4.png',
      title: 'Web Design Course',
      lessonCount: 28,
      date: '28/9',
      rating: 4.9,
    ),
    Category(
      imagePath: 'assets/design_course/interFace1.png',
      title: 'App Design Course',
      lessonCount: 12,
      date: '25/9',
      rating: 4.8,
    ),
    Category(
      imagePath: 'assets/design_course/interFace2.png',
      title: 'Web Design Course',
      lessonCount: 28,
      date: '26/9',
      rating: 4.9,
    ),
  ];
}
