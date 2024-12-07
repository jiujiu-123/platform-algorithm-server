-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: platform_algorithm
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `canvas`
--

CREATE DATABASE IF NOT EXISTS `platform_algorithm`;

DROP TABLE IF EXISTS `canvas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `canvas` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `userId` varchar(20) NOT NULL COMMENT '创建者id',
  `userName` varchar(255) NOT NULL COMMENT '创建者',
  `name` varchar(255) NOT NULL COMMENT '画布名称',
  `configuration` text NOT NULL COMMENT '画布算法节点配置JSON schema',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canvas`
--

LOCK TABLES `canvas` WRITE;
/*!40000 ALTER TABLE `canvas` DISABLE KEYS */;
INSERT INTO `canvas` (`id`, `userId`, `userName`, `name`, `configuration`, `createdAt`, `updatedAt`) VALUES (2,'qweasdzxc','jq1','自定义画布12','{\"nodes\":[{\"id\":\"Base-ba671e38\",\"type\":\"StartNode\",\"position\":{\"x\":645,\"y\":0},\"data\":{\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":800,\"height\":270},\"selected\":false},{\"id\":\"Base-19c31af7\",\"type\":\"VariableNode\",\"position\":{\"x\":373.6128105599614,\"y\":484.08752649029475},\"data\":{\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":800,\"height\":474},\"selected\":false,\"dragging\":false},{\"id\":\"Base-0c678f08\",\"type\":\"BaseNode\",\"position\":{\"x\":40.71499193191738,\"y\":958.0875264902947},\"data\":{\"label\":\"延迟/等待\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50},\"selected\":false,\"dragging\":false},{\"id\":\"Base-b13f9ced\",\"type\":\"BaseNode\",\"position\":{\"x\":289.3721342333957,\"y\":1121.8869844480348},\"data\":{\"label\":\"循环组件\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50},\"selected\":false,\"dragging\":false},{\"id\":\"Base-56ba05ef\",\"type\":\"BaseNode\",\"position\":{\"x\":975,\"y\":1200},\"data\":{\"label\":\"Python脚本\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50}},{\"id\":\"Base-a8c5732c\",\"type\":\"BaseNode\",\"position\":{\"x\":1740,\"y\":1230},\"data\":{\"label\":\"JS脚本\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50}},{\"id\":\"Base-cdd168a8\",\"type\":\"BaseNode\",\"position\":{\"x\":-30,\"y\":1500},\"data\":{\"label\":\"异常捕获\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50}},{\"id\":\"Base-b66d2310\",\"type\":\"BaseNode\",\"position\":{\"x\":540,\"y\":1545},\"data\":{\"label\":\"日志输出\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50}},{\"id\":\"SubProcess-f43d59b0\",\"type\":\"BaseNode\",\"position\":{\"x\":1320,\"y\":1545},\"data\":{\"label\":\"设备是否可控\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50}},{\"id\":\"SubProcess-c2bcb371\",\"type\":\"BaseNode\",\"position\":{\"x\":2055,\"y\":1635},\"data\":{\"label\":\"设备状态判断\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50}},{\"id\":\"HOC-9c89cbfd\",\"type\":\"BaseNode\",\"position\":{\"x\":-137.02476205293908,\"y\":1673.0990482117566},\"data\":{\"label\":\"PID算法\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50},\"selected\":false,\"dragging\":false},{\"id\":\"HOC-6213f319\",\"type\":\"BaseNode\",\"position\":{\"x\":305.4063491446086,\"y\":1663.9187301710783},\"data\":{\"label\":\"冷量预测\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50},\"selected\":true,\"dragging\":false},{\"id\":\"HOC-46224cb7\",\"type\":\"BaseNode\",\"position\":{\"x\":645,\"y\":1740},\"data\":{\"label\":\"流量预测\",\"groups\":[],\"inputs\":[],\"outputs\":{}},\"measured\":{\"width\":200,\"height\":50},\"selected\":false,\"dragging\":false}],\"edges\":[{\"source\":\"Base-ba671e38\",\"sourceHandle\":\"output\",\"target\":\"Base-19c31af7\",\"targetHandle\":\"input\",\"id\":\"Edge-d2d915fe\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-d2d915fe_s0\",\"startPoint\":{\"x\":1112,\"y\":282},\"endPoint\":{\"x\":1112,\"y\":382},\"incomingShape\":\"Base-ba671e38\",\"outgoingShape\":\"Base-19c31af7\"}],\"container\":\"root\"},{\"source\":\"Base-19c31af7\",\"sourceHandle\":\"output\",\"target\":\"Base-0c678f08\",\"id\":\"Edge-f7864606\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-f7864606_s0\",\"startPoint\":{\"x\":1112,\"y\":856},\"endPoint\":{\"x\":1112,\"y\":956},\"incomingShape\":\"Base-19c31af7\",\"outgoingShape\":\"Base-0c678f08\"}],\"container\":\"root\"},{\"source\":\"Base-0c678f08\",\"sourceHandle\":\"Base-0c678f08-left\",\"target\":\"Base-b13f9ced\",\"id\":\"Edge-2e996932\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-2e996932_s0\",\"startPoint\":{\"x\":1112,\"y\":1006},\"endPoint\":{\"x\":1112,\"y\":1106},\"incomingShape\":\"Base-0c678f08\",\"outgoingShape\":\"Base-b13f9ced\"}],\"container\":\"root\"},{\"source\":\"Base-b13f9ced\",\"sourceHandle\":\"Base-b13f9ced-bottom\",\"target\":\"Base-56ba05ef\",\"id\":\"Edge-1f680ec0\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-1f680ec0_s0\",\"startPoint\":{\"x\":1062,\"y\":1156},\"endPoint\":{\"x\":552,\"y\":1256},\"bendPoints\":[{\"x\":1062,\"y\":1166},{\"x\":552,\"y\":1166}],\"incomingShape\":\"Base-b13f9ced\",\"outgoingShape\":\"Base-56ba05ef\"}],\"container\":\"root\"},{\"source\":\"Base-b13f9ced\",\"sourceHandle\":\"Base-b13f9ced-bottom\",\"target\":\"Base-b66d2310\",\"id\":\"Edge-0a75341c\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-0a75341c_s0\",\"startPoint\":{\"x\":1112,\"y\":1156},\"endPoint\":{\"x\":1112,\"y\":1256},\"incomingShape\":\"Base-b13f9ced\",\"outgoingShape\":\"Base-b66d2310\"}],\"container\":\"root\"},{\"source\":\"Base-b13f9ced\",\"sourceHandle\":\"Base-b13f9ced-bottom\",\"target\":\"Base-cdd168a8\",\"id\":\"Edge-6af33086\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-6af33086_s0\",\"startPoint\":{\"x\":1162,\"y\":1156},\"endPoint\":{\"x\":1672,\"y\":1256},\"bendPoints\":[{\"x\":1162,\"y\":1166},{\"x\":1672,\"y\":1166}],\"incomingShape\":\"Base-b13f9ced\",\"outgoingShape\":\"Base-cdd168a8\"}],\"container\":\"root\"},{\"source\":\"Base-56ba05ef\",\"sourceHandle\":\"Base-56ba05ef-right\",\"target\":\"SubProcess-f43d59b0\",\"id\":\"Edge-0b9409a2\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-0b9409a2_s0\",\"startPoint\":{\"x\":552,\"y\":1306},\"endPoint\":{\"x\":552,\"y\":1406},\"incomingShape\":\"Base-56ba05ef\",\"outgoingShape\":\"SubProcess-f43d59b0\"}],\"container\":\"root\"},{\"source\":\"Base-cdd168a8\",\"sourceHandle\":\"Base-cdd168a8-bottom\",\"target\":\"HOC-6213f319\",\"id\":\"Edge-5199ca82\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"selected\":false,\"sections\":[{\"id\":\"Edge-5199ca82_s0\",\"startPoint\":{\"x\":1672,\"y\":1306},\"endPoint\":{\"x\":932,\"y\":1406},\"bendPoints\":[{\"x\":1672,\"y\":1326},{\"x\":932,\"y\":1326}],\"incomingShape\":\"Base-cdd168a8\",\"outgoingShape\":\"HOC-6213f319\"}],\"container\":\"root\"},{\"source\":\"HOC-9c89cbfd\",\"sourceHandle\":\"HOC-9c89cbfd-right\",\"target\":\"HOC-6213f319\",\"id\":\"Edge-7052d14c\",\"style\":{\"stroke\":\"#000\"},\"type\":\"step\",\"markerEnd\":{\"type\":\"arrowclosed\",\"width\":40,\"height\":40,\"color\":\"#000\"},\"sections\":[{\"id\":\"Edge-7052d14c_s0\",\"startPoint\":{\"x\":1392,\"y\":1306},\"endPoint\":{\"x\":882,\"y\":1406},\"bendPoints\":[{\"x\":1392,\"y\":1316},{\"x\":882,\"y\":1316}],\"incomingShape\":\"HOC-9c89cbfd\",\"outgoingShape\":\"HOC-6213f319\"}],\"container\":\"root\"}]}','2024-09-14 08:54:00','2024-10-08 09:55:14');
/*!40000 ALTER TABLE `canvas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `userId` varchar(20) NOT NULL COMMENT '创建者id',
  `userName` varchar(255) NOT NULL COMMENT '创建者',
  `materialId` varchar(255) NOT NULL COMMENT '唯一标识，由前端生成，用于唯一标识，不可重复，不可修改',
  `name` varchar(255) NOT NULL COMMENT '素材名称',
  `icon` varchar(100) NOT NULL COMMENT '图标',
  `type` varchar(255) NOT NULL COMMENT '物料大类，可用于筛选，或者按需读取',
  `version` varchar(50) DEFAULT 'V1.0.0' COMMENT '版本号',
  `nodeConfig` text NOT NULL COMMENT '该物料对应的节点配置 JSON schema',
  `edgeConfig` text NOT NULL COMMENT '该物料对应的边配置 JSON schema',
  `parentId` int DEFAULT NULL COMMENT '父级物料id，用于分类，默认为null',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` (`id`, `userId`, `userName`, `materialId`, `name`, `icon`, `type`, `version`, `nodeConfig`, `edgeConfig`, `parentId`, `createdAt`, `updatedAt`) VALUES (1,'CDFSDHJKD','test','BASE_1','开始','StartNode','Base','V1.0.0','{\"id\":\"StartNode\",\"position\":{\"x\":0,\"y\":0},\"type\": \"StartNode\",\"width\":800,\"data\":{\"groups\": [],\"inputs\": [],\"outputs\": {}}}','{}',NULL,'2024-09-09 05:56:25','2024-10-07 05:22:04'),(2,'CDFSDHJKD','test','BASE_2','变量','VariableNode','Base','V1.0.0','{\"id\":\"VariableNode\",\"position\":{\"x\":0,\"y\":0},\"type\": \"VariableNode\",\"width\":800,\"data\":{\"groups\": [],\"inputs\": [],\"outputs\": {}}}','{}',NULL,'2024-09-18 07:20:30','2024-10-07 07:32:42'),(3,'CDFSDHJKD','test','BASE_3','结束','EndNode','Base','V1.0.0','{\"id\": \"EndNode\",\"position\": {\"x\": 0,\"y\": 0},\"type\": \"EndNode\",\"width\": 800,\"data\": {\"groups\": [],\"inputs\": [],\"outputs\": {\"stream\":true}}}','{}',NULL,'2024-09-27 02:39:31','2024-10-07 05:22:04'),(4,'CDFSDHJKD','test','BASE_4','选择器','SelectNode','Base','V1.0.0','{\"id\":\"SelectNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"SelectNode\",\"width\":800,\"data\":{\"groups\":{\"condition\": \"&&\"},\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-09-27 02:48:52','2024-10-07 05:33:38'),(5,'CDFSDHJKD','test','dooodooo','延迟/等待','AwaitNode','Base','V1.0.0','{\"id\":\"AwaitNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"延迟/等待\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 05:28:19','2024-10-07 09:33:45'),(7,'CDFSDHJKD','test','oodeoodN','循环组件','CirculationNode','Base','V1.0.0','{\"id\":\"CirculationNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"循环组件\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 06:16:59','2024-10-07 06:36:48'),(8,'CDFSDHJKD','test','ddeeodoo','Python脚本','PythonNode','Base','V1.0.0','{\"id\":\"PythonNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"Python脚本\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 06:45:13','2024-10-07 06:47:38'),(10,'CDFSDHJKD','test','Neooeede','JS脚本','JSNode','Base','V1.0.0','{\"id\":\"JsNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"JS脚本\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 06:54:39','2024-10-07 06:54:39'),(11,'CDFSDHJKD','test','dNoNeood','异常捕获','CatchNode','Base','V1.0.0','{\"id\":\"CatchNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"异常捕获\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 06:59:08','2024-10-07 06:59:08'),(12,'CDFSDHJKD','test','edNooeod','日志输出','loggerNode','Base','V1.0.0','{\"id\":\"loggerNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"日志输出\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:03:56','2024-10-07 07:05:16'),(13,'CDFSDHJKD','test','odeNoodd','设备是否可控','IsControlNode','SubProcess','V1.0.0','{\"id\":\"IsControlNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"设备是否可控\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:09:51','2024-10-07 07:09:51'),(14,'CDFSDHJKD','test','oNoodNee','设备状态判断','StatelNode','SubProcess','V1.0.0','{\"id\":\"StatelNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"设备状态判断\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:11:06','2024-10-07 07:11:06'),(15,'CDFSDHJKD','test','odNeoeod','控制指令下发','ControlCommandNode','SubProcess','V1.0.0','{\"id\":\"ControlCommandNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"控制指令下发\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:12:23','2024-10-07 07:12:23'),(16,'CDFSDHJKD','test','eddoNNoo','控制后判断','ControlAfterNode','SubProcess','V1.0.0','{\"id\":\"ControlAfterNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"控制后判断\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:12:58','2024-10-07 07:12:58'),(17,'CDFSDHJKD','test','odNododd','状态变化触发','StateChangeNode','SubProcess','V1.0.0','{\"id\":\"StateChangeNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"状态变化触发\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:13:29','2024-10-07 07:13:29'),(18,'CDFSDHJKD','test','ddNododo','设备优先级判断','IsPriorityNode','SubProcess','V1.0.0','{\"id\":\"IsPriorityNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"设备优先级判断\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:15:01','2024-10-07 07:15:01'),(19,'CDFSDHJKD','test','oeoooddo','PID算法','PIDNode','HOC','V1.0.0','{\"id\":\"PIDNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"PID算法\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:17:45','2024-10-07 07:17:45'),(20,'CDFSDHJKD','test','odooNdoo','冷量预测','CoolingCapacityNode','HOC','V1.0.0','{\"id\":\"CoolingCapacityNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"冷量预测\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:28:21','2024-10-07 07:28:21'),(21,'CDFSDHJKD','test','Nedddeod','压力预测','PressurePredictionNode','HOC','V1.0.0','{\"id\":\"PressurePredictionNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"压力预测\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:29:01','2024-10-07 07:29:01'),(22,'CDFSDHJKD','test','eoodooNo','流量预测','FlowPredictionNode','HOC','V1.0.0','{\"id\":\"FlowPredictionNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"流量预测\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:29:28','2024-10-07 07:29:28'),(23,'CDFSDHJKD','test','dNoooode','冷机预测性维护','MaintenanceNode','HOC','V1.0.0','{\"id\":\"MaintenanceNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"冷机预测性维护\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:30:04','2024-10-07 07:30:04'),(24,'CDFSDHJKD','test','edoeedoo','chatGPT','ChatGPTNode','HOC','V1.0.0','{\"id\":\"ChatGPTNode\",\"position\":{\"x\":0,\"y\":0},\"type\":\"BaseNode\",\"width\":800,\"data\":{\"label\":\"chatGPT\",\"groups\":[],\"inputs\":[],\"outputs\":{}}}','{}',NULL,'2024-10-07 07:30:42','2024-10-07 07:30:42');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'platform_algorithm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-07 14:49:18
