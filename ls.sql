SET NAMES UTF8;
DROP DATABASE IF EXISTS ls;
CREATE DATABASE ls CHARSET=UTF8;
USE ls;

/**相关文章分类**/
CREATE TABLE ls_article_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**相关文章**/
CREATE TABLE ls_article(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,		#所属分类编号
  title VARCHAR(128),		#主标题
  article_content TEXT,		#文章内容
  write_time BIGINT,		#发表时间
  article_from VARCHAR(64),	#文章来源
  article_author VARCHAR(32),	#文章作者
  article_comment VARCHAR(256),  #文章评论
  article_comment_count INT	#文章评论数
);

/**轮播图片路径**/
CREATE  TABLE ls_carousel_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic_id INT,			#图片编号
  pic_path VARCHAR(128)		#图片路径
);

/**用户信息**/
CREATE TABLE ls_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/*******************/
/******数据导入******/
/*******************/
 
/**相关文章分类**/
INSERT INTO ls_article_family VALUES
(NULL,"明朝文化"),
(NULL,"明朝经济"),
(NULL,"明朝政治"),
(NULL,"明朝军事"),
(NULL,"明朝外交");

/**相关文章**/
INSERT INTO ls_article VALUES
(1,1,'明朝的八股文科举制度','明洪武三十年二月，三年一度的会试开启，以刘三吾、白信蹈主持。八十四岁高龄的翰林学士刘三吾被朱元璋选为主考官，此人是当世大儒、士林领袖。元末时他担任过广西提学，相当于教育厅厅长。明朝建立后，科举制度条例由他修订，主编的《寰宇通志》，向时人普及当时中国的周边国家。刘三吾的才学品德都是一流，《明史》称其“为人慷慨，胸中无城府，自号坦坦翁”。本次会试，录取五十一名，经三月殿试后，以陈安阝为头名状元，尹昌隆为第二名，刘仕谔为第三名，是为春榜。
本次录取的五十一名举人全部是南方人，北方人一名未取，这种情况是明朝历届科举以来头一次，被称为南榜。会试落第的北方举人对此大为不满，联名上疏，鸣冤告状，告两位南方籍的考官刘三吾、白信蹈徇私舞弊，偏袒南方人。一时朝野震撼，多名监察御史上书要求朱元璋彻查此案。朱元璋亦是大怒，三月初十，下诏命侍读学士、前科状元张信等十二人对此调查，于落第试卷中每人再各阅十卷。状元陈安阝、榜眼尹昌隆、探花刘仕谔也为调查组成员。
调查组火速进行复查，四月末得出结论，让朱元璋再度大惊，经复阅后上呈的试卷，文理不通，并有犯禁之语。以试卷水平判断，所录取五十一人皆是凭才学录取，无任何问题。有人主张更换几名，录取北方举人，以迎合朱元璋旨意；张信认为刘三吾所取无私，应该秉公维持原取。结论一出，朝野再度哗然，落榜的北方举人们并不接受，认为其中还是有鬼。朝中许多北方籍官员纷纷抨击，要求再次选派人手，对考卷进行重新复核，并严查所有涉案官员。还有人上告说刘三吾﹑白信蹈为掩盖真相，暗中嘱咐张信等人故意以陋卷进呈。
对于这种局面，朱元璋五月突然下诏，指斥本次科举的主考刘三吾和副主考白信蹈为“蓝玉余党”，称刘三吾十余年前曾上书为胡惟庸鸣冤，将其认定为“反贼”。因刘三吾年岁已高，将他发配西北戍边，将白信蹈、张信斩首分尸。福建闽县的状元陈安阝被处死，浙江江阴的探花刘仕谔被发配戍边，后被召回，又被弹劾处死。其余涉案官员全部受到严惩，调查组十二人中只有两人得免，因为他们在复核试卷后，为迎合上意，开列的中榜名单上有北方举人。六月，朱元璋亲自策问，再度录取六十一名，殿试以黄观为第一名﹑韩克忠为第二名﹑王恕为第三名，是为夏榜。因所录六十一人全为北方人，又称北榜。
这件南北榜案是明朝科举大事件，开明朝分南北取士之先例，至洪熙帝以后遂成定制。从此明朝科举不再是全国统考，而是分成南北榜，即南北方的学子，按照其所处地域进行考试，分别会试录取后，再统一参加殿试，这种制度此后沿用于整个明清两朝。',
'2019-01-30 13:52:38','中国历史网','梓岚',NULL,100);

/**轮播图片路径**/
INSERT INTO ls_carousel_pic VALUES
(NULL,1,'img/01.png'),
(NULL,2,'img/02.png'),
(NULL,3,'img/03.png');

/**用户信息**/
INSERT INTO ls_user VALUES
(NULL,"zhuxiaoyong","123456","zxy@qq.com",18261195937,"img/avatar/default.png","朱小勇",1);