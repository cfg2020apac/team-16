import 'package:best_flutter_ui_templates/design_course/category_list_view.dart';
import 'package:best_flutter_ui_templates/design_course/course_info_screen.dart';
import 'package:best_flutter_ui_templates/design_course/popular_course_list_view.dart';
import 'package:best_flutter_ui_templates/fitness_app/fintness_app_theme.dart';
import 'package:best_flutter_ui_templates/main.dart';
import 'package:flutter/material.dart';
import 'design_course_app_theme.dart';

class Forum extends StatefulWidget {
  @override
  _ForumState createState() => _ForumState();
}

class _ForumState extends State<Forum> {
  bool val_1 = false;
  bool val_2 = false;
  bool val_3 = false;

  void _showcontent() {
    showDialog(
      context: context, barrierDismissible: false, // user must tap button!

      builder: (BuildContext context) {
        return new AlertDialog(
          title: new Text('Submitted'),
          content: new SingleChildScrollView(
            child: new ListBody(
              children: [
                new Text('Thanks for polling. \n\n+10 points'),
              ],
            ),
          ),
          actions: [
            new FlatButton(
              child: new Text('Ok'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Stack(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.fromLTRB(15, 20, 15, 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Center(
                    child: Text(
                      'Forum',
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        fontSize: 22,
                        letterSpacing: 0.27,
                        color: DesignCourseAppTheme.darkerText,
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  new Container(
                    padding: EdgeInsets.all(20),
                    //height: 175.37,
                    width: 376.00,
                    decoration: BoxDecoration(
                      color: Color(0xff60A881).withOpacity(0.4),
                      borderRadius: BorderRadius.circular(11.00),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        new Text(
                          "Poll:\nWhich team you would like the best?",
                          style: TextStyle(
                            //fontFamily: "PingFang HK",
                            fontWeight: FontWeight.w500,
                            fontSize: 16,
                          ),
                        ),
                        SizedBox(height: 10),
                        Column(
                          children: <Widget>[
                            Center(
                              child: Row(
                                children: [
                                  Row(
                                    children: [
                                      Checkbox(
                                        activeColor:
                                            DesignCourseAppTheme.nearlyBlue,
                                        value: val_1,
                                        onChanged: (bool value) {
                                          setState(() {
                                            val_1 = value;
                                          });
                                        },
                                      ),
                                      Text("Team A")
                                    ],
                                  ),
                                  Row(
                                    children: [
                                      Checkbox(
                                        activeColor:
                                            DesignCourseAppTheme.nearlyBlue,
                                        value: val_2,
                                        onChanged: (bool value) {
                                          setState(() {
                                            val_2 = value;
                                          });
                                        },
                                      ),
                                      Text("Team B")
                                    ],
                                  ),
                                  Row(
                                    children: [
                                      Checkbox(
                                        activeColor:
                                            DesignCourseAppTheme.nearlyBlue,
                                        value: val_3,
                                        onChanged: (bool value) {
                                          setState(() {
                                            val_3 = value;
                                          });
                                        },
                                      ),
                                      Text("Team C")
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 5),
                        Center(
                          child: RaisedButton(
                            onPressed: _showcontent,
                            child: Text("Submit",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontFamily: "WorkSans")),
                            color: DesignCourseAppTheme.nearlyBlue,
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 30,
                  ),
                  Text(
                    'Featured',
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 22,
                      letterSpacing: 0.27,
                      color: DesignCourseAppTheme.darkerText,
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  SingleChildScrollView(
                    child: Column(
                      children: [
                        postCardView(
                            "Chan Tai Man",
                            "10 mins ago",
                            "Talking about the finance future in HK, virtual bank is definitely a game changer.",
                            "23",
                            "10",
                            "7"),
                        postCardView(
                            "Mentor 1",
                            "10 mins ago",
                            "Hi students I'm CEO of ABC Startup. Feel free to ask me questions here and earn participation points.",
                            "23",
                            "10",
                            "7"),
                            postCardView(
                            "Mentor 1",
                            "10 mins ago",
                            "Hi students I'm CEO of ABC Startup. Feel free to ask me questions here and earn participation points.",
                            "23",
                            "10",
                            "7"),
                            postCardView(
                            "Mentor 1",
                            "10 mins ago",
                            "Hi students I'm CEO of ABC Startup. Feel free to ask me questions here and earn participation points.",
                            "23",
                            "10",
                            "7")
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

Widget postCardView(String name, String time, String content, String likes,
    String comments, String shares) {
  return new Card(
    elevation: 3,
    child: new Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        new ListTile(
          leading: CircleAvatar(
            radius: 20.0,
          ),
          title: new Text(
            name,
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          subtitle: new Row(
            children: [
              new Text(time),
              SizedBox(width: 5),
              new Icon(
                Icons.public,
                size: 15.0,
              )
            ],
          ),
          trailing: new Icon(Icons.more_horiz),
        ),
        ListTile(
          title: Text(content),
        ),
        Container(
          padding: new EdgeInsets.all(18.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              new Row(
                children: <Widget>[
                  new CircleAvatar(
                    radius: 10.0,
                    backgroundColor: Color(0xff3b5998),
                    child: new Icon(
                      Icons.thumb_up,
                      size: 12.0,
                      color: Colors.white,
                    ),
                  ),
                  new Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 0.0, horizontal: 8.0),
                    child: new Text(likes),
                  ),
                ],
              ),
              new Text(comments + " comments · " + shares + " share"),
            ],
          ),
        )
      ],
    ),
  );
}
