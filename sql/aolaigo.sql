/*
Navicat MySQL Data Transfer

Source Server         : laoyang
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : aolaigo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-16 10:42:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) NOT NULL,
  `goodsid` varchar(255) NOT NULL,
  `goodsname` varchar(255) NOT NULL,
  `goodsimg` varchar(255) NOT NULL,
  `goodsnum` int(11) NOT NULL,
  `goodsprice` decimal(10,2) NOT NULL,
  `addcarttime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`cart_id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8 ROW_FORMAT=REDUNDANT;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('60', 'laoyang', '66', '路易2000 男士长袖衬衫 PSD53CF4202E012', 'http://localhost:156/src/images/goodsnan12.jpg', '33', '5454.00', '2018-04-15 16:34:22');
INSERT INTO `cart` VALUES ('50', 'laoyang', '5', 'MOFAN/摩凡 半高领星星针织套头衫', 'http://localhost:156/src/images/g6.jpg', '2', '220.00', '2018-04-14 11:56:20');
INSERT INTO `cart` VALUES ('54', 'laoyang', '56', '路易2000 男士长袖丝光衬衫', 'http://localhost:156/src/images/goodsnan2.jpg', '2', '649.00', '2018-04-14 16:16:31');
INSERT INTO `cart` VALUES ('46', '18777953236', '2', ' Five Plus 雪纺拼接刺绣字母喇叭中袖T恤', 'http://10.3.133.19:156/src/images/g3.jpg', '113', '199.00', '2018-04-13 21:13:11');
INSERT INTO `cart` VALUES ('49', 'laoyang', '7', 'Five Plus 新女装迪士尼美女与野兽棉质短袖T恤', 'http://localhost:156/src/images/g8.jpg', '2', '219.00', '2018-04-14 10:49:32');
INSERT INTO `cart` VALUES ('45', '18877121123', '4', 'A02 少女风蝙蝠袖拼接系带条纹T恤', 'http://localhost:156/src/images/g5.jpg', '10', '284.00', '2018-04-13 19:54:02');
INSERT INTO `cart` VALUES ('53', 'laoyang', '54', '新格新 男士时尚长袖衬衫', 'http://localhost:156/src/images/goodsnan13.jpg', '2', '120.00', '2018-04-14 16:16:45');
INSERT INTO `cart` VALUES ('55', 'laoyang', '84', '龙狮戴尔 秋冬男士轻量羽绒服', 'http://localhost:156/src/images/goodshu7.jpg', '1', '198.00', '2018-04-15 14:50:23');
INSERT INTO `cart` VALUES ('63', 'laoyang', '44', '大嘴猴 男士时尚休闲圆领印花套头卫衣休闲服 PSD53CD2702', 'http://localhost:156/src/images/goodsnan3.jpg', '49', '157.00', '2018-04-15 17:52:28');
INSERT INTO `cart` VALUES ('62', 'laoyang', '42', '大嘴猴 秋装新款男士时尚印花带帽开衫卫衣休闲服 PSD53CD4432', 'http://localhost:156/src/images/goodsnan1.jpg', '94', '180.00', '2018-04-15 17:38:51');
INSERT INTO `cart` VALUES ('61', 'laoyang', '75', '路易2000 男士长袖衬衫 PSD53CF4202E012', 'http://localhost:156/src/images/goodsnan8.jpg', '19', '334.00', '2018-04-15 16:41:37');
INSERT INTO `cart` VALUES ('64', 'laoyang', '53', '利蜂 男士时尚长袖T恤 PSD53CD2702', 'http://localhost:156/src/images/goodsnan12.jpg', '14', '357.00', '2018-04-15 18:40:05');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(255) NOT NULL,
  `goods_yuanjia` varchar(255) NOT NULL,
  `goods_price` decimal(10,0) NOT NULL,
  `goods_imgurl` varchar(255) NOT NULL,
  `goods_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `goods_class` varchar(255) NOT NULL,
  PRIMARY KEY (`goods_id`)
) ENGINE=MyISAM AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', ' NEW LOOK 休闲夹克牛仔马夹', '259', '50', '../images/g2.jpg', '2018-04-01 13:30:50', '女装');
INSERT INTO `goods` VALUES ('2', ' Five Plus 雪纺拼接刺绣字母喇叭中袖T恤', '399', '199', '../images/g3.jpg', '2018-01-01 13:30:52', '女装');
INSERT INTO `goods` VALUES ('3', ' LAGOGO 新款碎花吊带白色T恤蕾丝假两件短袖上衣', '259', '78', '../images/g4.jpg', '2018-02-14 13:30:53', '女装');
INSERT INTO `goods` VALUES ('4', 'A02 少女风蝙蝠袖拼接系带条纹T恤', '568', '284', '../images/g5.jpg', '2018-02-16 13:30:54', '女装');
INSERT INTO `goods` VALUES ('5', 'MOFAN/摩凡 半高领星星针织套头衫', '439', '220', '../images/g6.jpg', '2018-02-12 13:30:55', '女装');
INSERT INTO `goods` VALUES ('6', 'ROEM洛妍 女士新款舒适假两件短袖T恤', '498', '249', '../images/g7.jpg', '2018-01-08 12:30:56', '女装');
INSERT INTO `goods` VALUES ('7', 'Five Plus 新女装迪士尼美女与野兽棉质短袖T恤', '439', '219', '../images/g8.jpg', '2018-03-15 15:30:56', '女装');
INSERT INTO `goods` VALUES ('8', 'NEW LOOK 新品女士短款字母图案印花圆领短袖T恤', '79', '19', '../images/g9.jpg', '2018-03-15 13:12:12', '女装');
INSERT INTO `goods` VALUES ('9', '播 修身显瘦印花圆领纯色T恤', '339', '170', '../images/g10.jpg', '2018-04-14 09:30:58', '女装');
INSERT INTO `goods` VALUES ('10', ' LAGOGO 2017夏新款圆领T恤女 卡通印花女士修身短袖上衣', '199', '130', '../images/g1.jpg', '2018-04-10 13:30:59', '女装');
INSERT INTO `goods` VALUES ('11', ' NEW LOOK 休闲夹克牛仔马夹', '259', '50', '../images/g2.jpg', '2018-04-14 12:31:00', '女装');
INSERT INTO `goods` VALUES ('12', ' Five Plus 雪纺拼接刺绣字母喇叭中袖T恤', '399', '199', '../images/g3.jpg', '2018-04-14 13:31:02', '女装');
INSERT INTO `goods` VALUES ('13', ' LAGOGO 新款碎花吊带白色T恤蕾丝假两件短袖上衣', '259', '78', '../images/g4.jpg', '2018-03-20 13:31:01', '女装');
INSERT INTO `goods` VALUES ('14', 'A02 少女风蝙蝠袖拼接系带条纹T恤', '568', '284', '../images/g5.jpg', '2018-03-25 13:31:03', '女装');
INSERT INTO `goods` VALUES ('15', 'MOFAN/摩凡 半高领星星针织套头衫', '439', '220', '../images/g6.jpg', '2018-04-14 13:31:08', '女装');
INSERT INTO `goods` VALUES ('16', 'ROEM洛妍 女士新款舒适假两件短袖T恤', '498', '249', '../images/g7.jpg', '2018-03-15 13:31:08', '女装');
INSERT INTO `goods` VALUES ('17', 'Five Plus 新女装迪士尼美女与野兽棉质短袖T恤', '439', '219', '../images/g8.jpg', '2018-03-15 09:31:09', '女装');
INSERT INTO `goods` VALUES ('18', 'NEW LOOK 新品女士短款字母图案印花圆领短袖T恤', '79', '19', '../images/g9.jpg', '2018-03-25 12:31:10', '女装');
INSERT INTO `goods` VALUES ('19', '播 修身显瘦印花圆领纯色T恤', '339', '170', '../images/g10.jpg', '2018-03-25 13:31:13', '女装');
INSERT INTO `goods` VALUES ('20', ' LAGOGO 2017夏新款圆领T恤女 卡通印花女士修身短袖上衣', '199', '130', '../images/g1.jpg', '2018-04-14 13:31:16', '女装');
INSERT INTO `goods` VALUES ('21', ' NEW LOOK 休闲夹克牛仔马夹', '259', '50', '../images/g2.jpg', '2018-03-13 13:31:17', '女装');
INSERT INTO `goods` VALUES ('22', ' Five Plus 雪纺拼接刺绣字母喇叭中袖T恤', '399', '199', '../images/g3.jpg', '2018-04-14 13:31:18', '女装');
INSERT INTO `goods` VALUES ('23', ' LAGOGO 新款碎花吊带白色T恤蕾丝假两件短袖上衣', '259', '78', '../images/g4.jpg', '2018-04-14 13:31:19', '女装');
INSERT INTO `goods` VALUES ('24', 'A02 少女风蝙蝠袖拼接系带条纹T恤', '568', '284', '../images/g5.jpg', '2018-02-14 13:31:20', '女装');
INSERT INTO `goods` VALUES ('25', 'MOFAN/摩凡 半高领星星针织套头衫', '439', '220', '../images/g6.jpg', '2018-02-13 13:31:21', '女装');
INSERT INTO `goods` VALUES ('26', 'ROEM洛妍 女士新款舒适假两件短袖T恤', '498', '249', '../images/g7.jpg', '2018-04-14 13:31:22', '女装');
INSERT INTO `goods` VALUES ('27', 'Five Plus 新女装迪士尼美女与野兽棉质短袖T恤', '439', '219', '../images/g8.jpg', '2018-04-14 13:31:26', '女装');
INSERT INTO `goods` VALUES ('28', 'NEW LOOK 新品女士短款字母图案印花圆领短袖T恤', '79', '19', '../images/g9.jpg', '2018-03-06 13:31:27', '女装');
INSERT INTO `goods` VALUES ('29', '播 修身显瘦印花圆领纯色T恤', '339', '170', '../images/g10.jpg', '2018-04-14 13:31:28', '女装');
INSERT INTO `goods` VALUES ('30', ' LAGOGO 2017夏新款圆领T恤女 卡通印花女士修身短袖上衣', '199', '130', '../images/g1.jpg', '2018-04-14 13:31:29', '女装');
INSERT INTO `goods` VALUES ('31', ' NEW LOOK 休闲夹克牛仔马夹', '259', '50', '../images/g2.jpg', '2018-04-02 13:31:31', '女装');
INSERT INTO `goods` VALUES ('32', ' Five Plus 雪纺拼接刺绣字母喇叭中袖T恤', '399', '199', '../images/g3.jpg', '2018-04-14 13:31:31', '女装');
INSERT INTO `goods` VALUES ('33', ' LAGOGO 新款碎花吊带白色T恤蕾丝假两件短袖上衣', '259', '78', '../images/g4.jpg', '2018-04-14 13:31:32', '女装');
INSERT INTO `goods` VALUES ('34', 'A02 少女风蝙蝠袖拼接系带条纹T恤', '568', '284', '../images/g5.jpg', '2018-04-11 13:31:33', '女装');
INSERT INTO `goods` VALUES ('35', 'MOFAN/摩凡 半高领星星针织套头衫', '439', '220', '../images/g6.jpg', '2018-04-14 13:31:34', '女装');
INSERT INTO `goods` VALUES ('36', 'ROEM洛妍 女士新款舒适假两件短袖T恤', '498', '249', '../images/g7.jpg', '2018-04-14 13:31:35', '女装');
INSERT INTO `goods` VALUES ('37', 'Five Plus 新女装迪士尼美女与野兽棉质短袖T恤', '439', '219', '../images/g8.jpg', '2018-04-14 13:31:35', '女装');
INSERT INTO `goods` VALUES ('38', 'NEW LOOK 新品女士短款字母图案印花圆领短袖T恤', '79', '19', '../images/g9.jpg', '2018-04-14 13:31:12', '女装');
INSERT INTO `goods` VALUES ('39', '播 修身显瘦印花圆领纯色T恤', '339', '170', '../images/g10.jpg', '2018-04-14 13:23:37', '女装');
INSERT INTO `goods` VALUES ('40', ' LAGOGO 2017夏新款圆领T恤女 卡通印花女士修身短袖上衣', '1000', '500', '../images/g1.jpg', '2018-04-14 13:31:38', '女装');
INSERT INTO `goods` VALUES ('41', 'NEW LOOK 休闲夹克牛仔马夹', '890', '420', '../images/g2.jpg', '2018-04-10 13:31:40', '女装');
INSERT INTO `goods` VALUES ('42', '大嘴猴 秋装新款男士时尚印花带帽开衫卫衣休闲服 PSD53CD4432', '999', '180', '../images/goodsnan1.jpg', '2018-04-14 14:36:18', '男装');
INSERT INTO `goods` VALUES ('43', 'LuckyFriend 大嘴猴 男士时尚休闲圆领印花套头卫衣 PSD53CD2732', '969', '175', '../images/goodsnan2.jpg', '2018-04-04 14:56:50', '男装');
INSERT INTO `goods` VALUES ('44', '大嘴猴 男士时尚休闲圆领印花套头卫衣休闲服 PSD53CD2702', '869', '157', '../images/goodsnan3.jpg', '2018-01-14 14:56:55', '男装');
INSERT INTO `goods` VALUES ('45', '大嘴猴 男士时尚休闲连帽卫衣开衫 PSD53CD4452', '1190', '216', '../images/goodsnan4.jpg', '2018-04-10 14:57:02', '男装');
INSERT INTO `goods` VALUES ('46', '花花公子 男士时尚中山领休闲茄克', '1790', '716', '../images/goodsnan5.jpg', '2018-02-11 13:57:06', '男装');
INSERT INTO `goods` VALUES ('47', '路易2000 男士长袖丝光衬衫', '1298', '649', '../images/goodsnan6.jpg', '2018-03-15 14:57:09', '男装');
INSERT INTO `goods` VALUES ('48', '大嘴猴 大嘴猴男装羊羔绒马甲 PSD53CF4202E012', '1399', '252', '../images/goodsnan7.jpg', '2018-04-14 14:57:12', '男装');
INSERT INTO `goods` VALUES ('49', '大嘴猴 大嘴猴男装羊羔绒外套', '1699', '306', '../images/goodsnan8.jpg', '2018-04-14 14:57:16', '男装');
INSERT INTO `goods` VALUES ('50', '大嘴猴 男士针织松紧带卫裤运动长裤小脚裤 PSD53DI9582', '899', '162', '../images/goodsnan9.jpg', '2018-02-15 14:57:20', '男装');
INSERT INTO `goods` VALUES ('51', '欧尼杰 男式时尚简约长袖T恤 男式长袖T恤', '780', '195', '../images/goodsnan10.jpg', '2018-04-14 14:57:37', '男装');
INSERT INTO `goods` VALUES ('52', '欧尼杰 男式时尚简约长袖T恤', '880', '220', '../images/goodsnan11.jpg', '2018-03-12 14:57:40', '男装');
INSERT INTO `goods` VALUES ('53', '利蜂 男士时尚长袖T恤 PSD53CD2702', '1190', '357', '../images/goodsnan12.jpg', '2018-04-14 14:57:46', '男装');
INSERT INTO `goods` VALUES ('54', '新格新 男士时尚长袖衬衫', '399', '120', '../images/goodsnan13.jpg', '2018-01-14 15:09:22', '男装');
INSERT INTO `goods` VALUES ('55', '新格新 男士休闲时尚长袖衬衫', '439', '132', '../images/goodsnan1.jpg', '2018-03-19 14:48:02', '男装');
INSERT INTO `goods` VALUES ('56', '路易2000 男士长袖丝光衬衫', '1298', '649', '../images/goodsnan2.jpg', '2018-02-14 15:09:24', '男装');
INSERT INTO `goods` VALUES ('57', '路易2000 男士长袖衬衫 PSD53CF4202E012', '496', '198', '../images/goodsnan3.jpg', '2018-04-19 15:09:28', '男装');
INSERT INTO `goods` VALUES ('58', 'VFCOCO 男是白文时尚长袖衬衫', '1090', '109', '../images/goodsnan4.jpg', '2018-04-14 15:09:32', '男装');
INSERT INTO `goods` VALUES ('59', '路易2000 男士长袖衬衫 PSD53DI9582', '699', '210', '../images/goodsnan5.jpg', '2018-01-20 15:09:34', '男装');
INSERT INTO `goods` VALUES ('60', '欧尼杰 男式时尚简约长袖T恤 男式长袖T恤', '1123', '112', '../images/goodsnan6.jpg', '2018-04-14 15:09:37', '男装');
INSERT INTO `goods` VALUES ('61', '欧尼杰 男式时尚简约长袖T恤', '8800', '2200', '../images/goodsnan7.jpg', '2018-04-14 15:09:40', '男装');
INSERT INTO `goods` VALUES ('62', '利蜂 男士时尚长袖T恤 PSD53CD2702', '1190', '357', '../images/goodsnan8.jpg', '2018-01-10 15:09:44', '男装');
INSERT INTO `goods` VALUES ('63', '新格新 男士时尚长袖衬衫', '1234', '123', '../images/goodsnan9.jpg', '2018-04-14 15:10:01', '男装');
INSERT INTO `goods` VALUES ('64', '新格新 男士休闲时尚长袖衬衫', '543', '232', '../images/goodsnan10.jpg', '2018-04-17 15:10:04', '男装');
INSERT INTO `goods` VALUES ('65', '路易2000 男士长袖丝光衬衫', '456', '244', '../images/goodsnan11.jpg', '2018-04-14 15:10:07', '男装');
INSERT INTO `goods` VALUES ('66', '路易2000 男士长袖衬衫 PSD53CF4202E012', '6543', '5454', '../images/goodsnan12.jpg', '2018-02-14 15:10:11', '男装');
INSERT INTO `goods` VALUES ('67', 'VFCOCO 男是白文时尚长袖衬衫', '5465', '767', '../images/goodsnan13.jpg', '2018-01-14 15:30:15', '男装');
INSERT INTO `goods` VALUES ('68', '路易2000 男士长袖衬衫 PSD53DI9582', '543', '345', '../images/goodsnan1.jpg', '2018-04-10 15:10:25', '男装');
INSERT INTO `goods` VALUES ('69', '欧尼杰 男式时尚简约长袖T恤 男式长袖T恤', '2145', '543', '../images/goodsnan2.jpg', '2018-01-28 15:56:29', '男装');
INSERT INTO `goods` VALUES ('70', '欧尼杰 男式时尚简约长袖T恤', '5435', '1332', '../images/goodsnan3.jpg', '2018-02-28 15:10:32', '男装');
INSERT INTO `goods` VALUES ('71', '利蜂 男士时尚长袖T恤 PSD53CD2702', '9877', '5665', '../images/goodsnan4.jpg', '2018-03-24 16:10:35', '男装');
INSERT INTO `goods` VALUES ('72', '新格新 男士时尚长袖衬衫', '989', '455', '../images/goodsnan5.jpg', '2018-02-19 15:10:44', '男装');
INSERT INTO `goods` VALUES ('73', '新格新 男士休闲时尚长袖衬衫', '4394', '1133', '../images/goodsnan6.jpg', '2018-01-23 15:20:49', '男装');
INSERT INTO `goods` VALUES ('74', '路易2000 男士长袖丝光衬衫', '454', '135', '../images/goodsnan7.jpg', '2018-04-14 15:10:53', '男装');
INSERT INTO `goods` VALUES ('75', '路易2000 男士长袖衬衫 PSD53CF4202E012', '876', '334', '../images/goodsnan8.jpg', '2018-04-15 10:59:56', '男装');
INSERT INTO `goods` VALUES ('76', 'VFCOCO 男是白文时尚长袖衬衫', '2434', '567', '../images/goodsnan9.jpg', '2018-04-10 15:11:02', '男装');
INSERT INTO `goods` VALUES ('77', '路易2000 男士长袖衬衫 PSD53DI9582', '3213', '434', '../images/goodsnan10.jpg', '2018-04-14 13:11:05', '男装');
INSERT INTO `goods` VALUES ('78', '后街(HOZ) 男士新款时尚休闲鞋', '419', '249', '../images/goodshu1.jpg', '2018-04-14 17:59:25', '户外');
INSERT INTO `goods` VALUES ('79', '深圳特步 男板鞋时尚轻便网面透气防滑耐磨学生运动鞋', '279', '167', '../images/goodshu2.jpg', '2018-02-10 16:59:25', '户外');
INSERT INTO `goods` VALUES ('80', '深圳特步 男子春夏舒适时尚系列拼色跑鞋舒适耐磨阿甘休闲鞋', '279', '167', '../images/goodshu3.jpg', '2018-04-14 16:43:25', '户外');
INSERT INTO `goods` VALUES ('81', '深圳特步 男鞋夏季休闲鞋男低帮复古透气板鞋', '299', '179', '../images/goodshu4.jpg', '2018-04-14 23:59:25', '户外');
INSERT INTO `goods` VALUES ('82', '贵人鸟 男士正品舒适透气休闲慢跑鞋', '319', '191', '../images/goodshu5.jpg', '2018-04-14 16:59:25', '户外');
INSERT INTO `goods` VALUES ('83', '龙狮戴尔 男轻薄修身中长款羽绒服时尚立领保暖服外套', '1298', '649', '../images/goodshu6.jpg', '2018-04-01 16:59:25', '户外');
INSERT INTO `goods` VALUES ('84', '龙狮戴尔 秋冬男士轻量羽绒服', '496', '198', '../images/goodshu7.jpg', '2018-04-06 16:59:25', '户外');
INSERT INTO `goods` VALUES ('85', '后街(HOZ) 2017年秋款高帮帆布鞋男平底系带学生休闲鞋', '399', '169', '../images/goodshu8.jpg', '2018-04-14 16:59:25', '户外');
INSERT INTO `goods` VALUES ('86', '龙狮戴尔 冬季加厚长款男士羽绒服', '699', '210', '../images/goodshu9.jpg', '2018-04-03 13:34:25', '户外');
INSERT INTO `goods` VALUES ('87', '深圳特步 男春夏时尚舒适网科技柔软跑鞋', '319', '191', '../images/goodshu10.jpg', '2018-04-12 12:29:25', '户外');
INSERT INTO `goods` VALUES ('88', '深圳特步 男鞋春季运动鞋休闲跑步鞋', '3432', '1234', '../images/goodshu11.jpg', '2018-02-13 06:59:25', '户外');
INSERT INTO `goods` VALUES ('89', '贵人鸟 男士正品舒适透气跑步鞋', '1912', '1234', '../images/goodshu12.jpg', '2018-01-14 16:59:25', '户外');
INSERT INTO `goods` VALUES ('90', '后街(HOZ) 男士新款时尚休闲鞋', '23423', '12333', '../images/goodshu1.jpg', '2018-03-24 17:01:06', '户外');
INSERT INTO `goods` VALUES ('91', '深圳特步 男板鞋时尚轻便网面透气防滑耐磨学生运动鞋', '454', '234', '../images/goodshu2.jpg', '2018-01-14 07:01:12', '户外');
INSERT INTO `goods` VALUES ('92', '深圳特步 男子春夏舒适时尚系列拼色跑鞋舒适耐磨阿甘休闲鞋', '324', '221', '../images/goodshu3.jpg', '2018-03-13 15:01:21', '户外');
INSERT INTO `goods` VALUES ('93', '深圳特步 男鞋夏季休闲鞋男低帮复古透气板鞋', '321', '213', '../images/goodshu4.jpg', '2018-04-12 11:41:32', '户外');
INSERT INTO `goods` VALUES ('94', '贵人鸟 男士正品舒适透气休闲慢跑鞋', '1565', '1234', '../images/goodshu5.jpg', '2018-02-14 17:01:43', '户外');
INSERT INTO `goods` VALUES ('95', '龙狮戴尔 男轻薄修身中长款羽绒服时尚立领保暖服外套', '6767', '4345', '../images/goodshu6.jpg', '2018-04-14 10:01:49', '户外');
INSERT INTO `goods` VALUES ('96', '龙狮戴尔 秋冬男士轻量羽绒服', '1324', '656', '../images/goodshu7.jpg', '2018-01-04 17:12:09', '户外');
INSERT INTO `goods` VALUES ('97', '后街(HOZ) 2017年秋款高帮帆布鞋男平底系带学生休闲鞋', '6456', '4324', '../images/goodshu8.jpg', '2018-04-03 17:02:02', '户外');
INSERT INTO `goods` VALUES ('98', '龙狮戴尔 冬季加厚长款男士羽绒服', '7680', '6587', '../images/goodshu9.jpg', '2018-04-14 17:02:21', '户外');
INSERT INTO `goods` VALUES ('99', '深圳特步 男春夏时尚舒适网科技柔软跑鞋', '78769', '35435', '../images/goodshu10.jpg', '2018-02-14 17:12:29', '户外');
INSERT INTO `goods` VALUES ('100', '深圳特步 男鞋春季运动鞋休闲跑步鞋', '2434', '1234', '../images/goodshu11.jpg', '2018-01-10 07:02:36', '户外');
INSERT INTO `goods` VALUES ('101', '贵人鸟 男士正品舒适透气跑步鞋', '21443', '12580', '../images/goodshu12.jpg', '2018-04-11 17:02:47', '户外');

-- ----------------------------
-- Table structure for img
-- ----------------------------
DROP TABLE IF EXISTS `img`;
CREATE TABLE `img` (
  `img_id` varchar(255) NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `img_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`img_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of img
-- ----------------------------
INSERT INTO `img` VALUES ('1', 'images/z1.jpg', 'z');
INSERT INTO `img` VALUES ('2', 'images/z2.jpg', 'z');
INSERT INTO `img` VALUES ('3', 'images/z3.jpg', 'z');
INSERT INTO `img` VALUES ('4', 'images/z4.jpg', 'z');
INSERT INTO `img` VALUES ('5', 'images/z5.jpg', 'z');
INSERT INTO `img` VALUES ('6', 'images/z6.jpg', 'z');
INSERT INTO `img` VALUES ('7', 'images/z7.jpg', 'z');
INSERT INTO `img` VALUES ('8', 'images/z8.jpg', 'z');
INSERT INTO `img` VALUES ('9', 'images/z9.jpg', 'z');
INSERT INTO `img` VALUES ('10', 'images/z10.jpg', 'z');
INSERT INTO `img` VALUES ('11', 'images/z11.jpg', 'z');
INSERT INTO `img` VALUES ('12', 'images/z12.jpg', 'z');
INSERT INTO `img` VALUES ('13', 'images/z13.jpg', 'z');
INSERT INTO `img` VALUES ('14', 'images/z14.jpg', 'z');
INSERT INTO `img` VALUES ('15', 'images/z15.jpg', 'z');
INSERT INTO `img` VALUES ('16', 'images/z16.jpg', 'z');
INSERT INTO `img` VALUES ('17', 'images/s1.jpg', 's');
INSERT INTO `img` VALUES ('18', 'images/s2.jpg', 's');
INSERT INTO `img` VALUES ('19', 'images/s3.jpg', 's');
INSERT INTO `img` VALUES ('20', 'images/s4.jpg', 's');
INSERT INTO `img` VALUES ('21', 'images/s5.jpg', 's');
INSERT INTO `img` VALUES ('22', 'images/s6.jpg', 's');
INSERT INTO `img` VALUES ('23', 'images/s7.jpg', 's');
INSERT INTO `img` VALUES ('24', 'images/s8.jpg', 's');
INSERT INTO `img` VALUES ('25', 'images/s9.jpg', 's');
INSERT INTO `img` VALUES ('26', 'images/s10.jpg', 's');
INSERT INTO `img` VALUES ('27', 'images/s11.jpg', 's');
INSERT INTO `img` VALUES ('28', 'images/s12.png', 's');
INSERT INTO `img` VALUES ('29', 'images/s13.jpg', 's');
INSERT INTO `img` VALUES ('30', 'images/s14.png', 's');
INSERT INTO `img` VALUES ('31', 'images/s15.png', 's');
INSERT INTO `img` VALUES ('32', 'images/s16.jpg', 's');
INSERT INTO `img` VALUES ('33', 'images/k1.png', 'k');
INSERT INTO `img` VALUES ('34', 'images/k2.png', 'k');
INSERT INTO `img` VALUES ('35', 'images/k3.png', 'k');
INSERT INTO `img` VALUES ('36', 'images/k4.png', 'k');
INSERT INTO `img` VALUES ('37', 'images/k5.jpg', 'k');
INSERT INTO `img` VALUES ('38', 'images/k6.png', 'k');
INSERT INTO `img` VALUES ('39', 'images/k7.png', 'k');
INSERT INTO `img` VALUES ('40', 'images/k8.png', 'k');
INSERT INTO `img` VALUES ('41', 'images/k9.jpg', 'k');
INSERT INTO `img` VALUES ('42', 'images/k10.png', 'k');
INSERT INTO `img` VALUES ('43', 'images/k11.png', 'k');
INSERT INTO `img` VALUES ('44', 'images/k12.png', 'k');
INSERT INTO `img` VALUES ('45', 'images/k13.png', 'k');
INSERT INTO `img` VALUES ('46', 'images/k14.png', 'k');
INSERT INTO `img` VALUES ('47', 'images/k15.png', 'k');
INSERT INTO `img` VALUES ('48', 'images/k16.jpg', 'k');
INSERT INTO `img` VALUES ('49', 'images/y1.jpg', 'y');
INSERT INTO `img` VALUES ('50', 'images/y2.jpg', 'y');
INSERT INTO `img` VALUES ('51', 'images/y3.jpg', 'y');
INSERT INTO `img` VALUES ('52', 'images/y4.jpg', 'y');
INSERT INTO `img` VALUES ('53', 'images/y5.jpg', 'y');
INSERT INTO `img` VALUES ('54', 'images/y6.jpg', 'y');
INSERT INTO `img` VALUES ('55', 'images/y7.jpg', 'y');
INSERT INTO `img` VALUES ('56', 'images/y8.jpg', 'y');
INSERT INTO `img` VALUES ('57', 'images/y9.jpg', 'y');
INSERT INTO `img` VALUES ('58', 'images/y10.jpg', 'y');
INSERT INTO `img` VALUES ('59', 'images/y11.jpg', 'y');
INSERT INTO `img` VALUES ('60', 'images/y12.jpg', 'y');
INSERT INTO `img` VALUES ('61', 'images/y13.jpg', 'y');
INSERT INTO `img` VALUES ('62', 'images/y14.jpg', 'y');
INSERT INTO `img` VALUES ('63', 'images/y15.jpg', 'y');
INSERT INTO `img` VALUES ('64', 'images/y16.jpg', 'y');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'laoyang', 'laoyang', '18877121121');
INSERT INTO `user` VALUES ('2', 'laoluo', 'laoluo', '18877121122');
INSERT INTO `user` VALUES ('8', '18877121123', 'qwertyuiop', '18877121123');
INSERT INTO `user` VALUES ('9', 'laoyanga', 'laoyanga', '18877121124');
INSERT INTO `user` VALUES ('10', '1887712112', 'qwertyuiop', '1887712112');
INSERT INTO `user` VALUES ('11', '18877121129', 'qwertyuiop', '18877121129');
INSERT INTO `user` VALUES ('15', '18877121125', 'qwertyuiop', '18877121125');
INSERT INTO `user` VALUES ('20', '18777953236', '123123123', '18777953236');
SET FOREIGN_KEY_CHECKS=1;
