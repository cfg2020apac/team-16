import 'package:best_flutter_ui_templates/design_course/category_list_view.dart';
import 'package:best_flutter_ui_templates/design_course/course_info_screen.dart';
import 'package:best_flutter_ui_templates/design_course/popular_course_list_view.dart';
import 'package:best_flutter_ui_templates/fitness_app/fintness_app_theme.dart';
import 'package:best_flutter_ui_templates/main.dart';
import 'package:flutter/material.dart';
import 'design_course_app_theme.dart';
import 'package:url_launcher/url_launcher.dart';

class Program extends StatefulWidget {
  @override
  _ProgramState createState() => _ProgramState();
}

class _ProgramState extends State<Program> {
  _launchURL() async {
    const url =
        'https://drive.google.com/drive/folders/1U0W-dHpn7QTX8HJEY1xMulqGrIEKTHeY?usp=sharing';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: EdgeInsets.fromLTRB(15, 20, 15, 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
              'Your Program',
              textAlign: TextAlign.left,
              style: TextStyle(
                fontWeight: FontWeight.w600,
                fontSize: 22,
                letterSpacing: 0.27,
                color: DesignCourseAppTheme.darkerText,
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                    colors: [HexColor("#5FD395"), HexColor("#0C6133")],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight),
                borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(10.0),
                    bottomLeft: Radius.circular(10.0),
                    bottomRight: Radius.circular(10.0),
                    topRight: Radius.circular(10.0)),
                boxShadow: <BoxShadow>[
                  BoxShadow(
                      color: FitnessAppTheme.grey.withOpacity(0.6),
                      offset: Offset(1.1, 1.1),
                      blurRadius: 10.0),
                ],
              ),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      'Program Name:',
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        fontWeight: FontWeight.normal,
                        fontSize: 14,
                        letterSpacing: 0.0,
                        color: FitnessAppTheme.white,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 8.0),
                      child: Text(
                        'JA Finance for Future',
                        textAlign: TextAlign.left,
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 25,
                          letterSpacing: 0.0,
                          color: FitnessAppTheme.white,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 32,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(right: 4),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Padding(
                            padding: const EdgeInsets.only(left: 4),
                            child: Icon(
                              Icons.timer,
                              color: FitnessAppTheme.white,
                              size: 16,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 4.0),
                            child: Text(
                              '09/2019 - 10/2019',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontFamily: FitnessAppTheme.fontName,
                                fontWeight: FontWeight.w500,
                                fontSize: 14,
                                letterSpacing: 0.0,
                                color: FitnessAppTheme.white,
                              ),
                            ),
                          ),
                          Expanded(
                            child: SizedBox(),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(height: 30),
            Text(
              'Online Resources',
              textAlign: TextAlign.left,
              style: TextStyle(
                fontWeight: FontWeight.w600,
                fontSize: 22,
                letterSpacing: 0.27,
                color: DesignCourseAppTheme.darkerText,
              ),
            ),
            SizedBox(height: 20),
            new Container(
              child: GestureDetector(
                onTap: _launchURL,
                child: new Card(
                  elevation: 5,
                  child: new Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new ListTile(
                        leading: new Icon(Icons.plagiarism_sharp,
                            size: 40.0, color: Colors.grey),
                        title: new Text(
                          "Seminar Recording",
                          style: new TextStyle(fontSize: 20.0),
                        ),
                        subtitle: const Text('rec_sem.mp4'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            new Container(
              child: GestureDetector(
                onTap: _launchURL,
                child: new Card(
                  elevation: 5,
                  child: new Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new ListTile(
                        leading: new Icon(Icons.dashboard_customize,
                            size: 40.0, color: Colors.grey),
                        title: new Text(
                          "Evaluation WS",
                          style: new TextStyle(fontSize: 20.0),
                        ),
                        subtitle: const Text('evaluation.doc'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            new Container(
              child: GestureDetector(
                onTap: _launchURL,
                child: new Card(
                  elevation: 5,
                  child: new Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new ListTile(
                        leading: new Icon(Icons.dashboard_customize,
                            size: 40.0, color: Colors.grey),
                        title: new Text(
                          "Excel Solutions",
                          style: new TextStyle(fontSize: 20.0),
                        ),
                        subtitle: const Text('solutions.xlsx'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            new Container(
              child: GestureDetector(
                onTap: _launchURL,
                child: new Card(
                  elevation: 5,
                  child: new Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      new ListTile(
                        leading: new Icon(Icons.folder,
                            size: 40.0, color: Colors.grey),
                        title: new Text(
                          "Workshop Examples",
                          style: new TextStyle(fontSize: 20.0),
                        ),
                        subtitle: const Text('Details'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
