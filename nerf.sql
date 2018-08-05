-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2017 at 04:11 PM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nerf`
--

-- --------------------------------------------------------

--
-- Table structure for table `current_session`
--

CREATE TABLE IF NOT EXISTS `current_session` (
  `id` int(11) NOT NULL,
  `start_time` int(11) NOT NULL,
  `session_duration` int(11) NOT NULL,
  `scenario` varchar(255) NOT NULL,
  `team_red_score` int(11) NOT NULL,
  `team_blue_score` int(11) NOT NULL,
  `team_red_name` varchar(300) NOT NULL,
  `team_blue_name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `current_session`
--

INSERT INTO `current_session` (`id`, `start_time`, `session_duration`, `scenario`, `team_red_score`, `team_blue_score`, `team_red_name`, `team_blue_name`) VALUES
(0, 0, 2400, 'team deathmatch', 4, 2, 'ddd', 'fff');

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE IF NOT EXISTS `game` (
  `id` int(11) NOT NULL,
  `session_id` int(11) NOT NULL,
  `scenario_id` int(11) NOT NULL,
  `duration` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `game_status`
--

CREATE TABLE IF NOT EXISTS `game_status` (
  `id` int(11) NOT NULL,
  `session_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `red_team_stat` int(11) NOT NULL,
  `blue_team_stat` int(11) NOT NULL,
  `red_team_id` int(11) NOT NULL,
  `blue_team_id` int(11) NOT NULL,
  `all_team_id` int(11) NOT NULL,
  `scenario_id` int(11) NOT NULL,
  `start_time` int(11) NOT NULL COMMENT 'secunds'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE IF NOT EXISTS `player` (
  `card_id` varchar(11) NOT NULL,
  `nickname` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `player_stats`
--

CREATE TABLE IF NOT EXISTS `player_stats` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL,
  `death_count` int(11) NOT NULL,
  `zombie_count` int(11) NOT NULL,
  `zombie_winner` int(11) NOT NULL,
  `vip_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `player_status`
--

CREATE TABLE IF NOT EXISTS `player_status` (
  `card_id` int(11) NOT NULL,
  `vip` int(11) NOT NULL,
  `death` int(11) NOT NULL,
  `zombie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `prepare_game`
--

CREATE TABLE IF NOT EXISTS `prepare_game` (
  `id` int(11) NOT NULL,
  `session_id` int(11) NOT NULL,
  `red_team_id` int(11) NOT NULL,
  `blue_team_id` int(11) NOT NULL,
  `all_team_id` int(11) NOT NULL,
  `status` int(11) NOT NULL COMMENT '0-open, 1-saved'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `scenario`
--

CREATE TABLE IF NOT EXISTS `scenario` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE IF NOT EXISTS `session` (
  `id` int(11) NOT NULL,
  `sessiontype` int(11) DEFAULT NULL,
  `start_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `sessiontype`, `start_time`) VALUES
(1491465351, NULL, NULL),
(1491465543, NULL, NULL),
(1491465551, NULL, NULL),
(1491465552, NULL, NULL),
(1491465553, NULL, NULL),
(1491465620, NULL, NULL),
(1491465622, NULL, NULL),
(1491465623, NULL, NULL),
(1491465728, NULL, NULL),
(1491465928, NULL, NULL),
(1491466054, NULL, NULL),
(1491466465, NULL, NULL),
(1491466467, NULL, NULL),
(1491466468, NULL, NULL),
(1491466471, NULL, NULL),
(1491466472, NULL, NULL),
(1491466473, NULL, NULL),
(1491466514, NULL, NULL),
(1491466515, NULL, NULL),
(1491466516, NULL, NULL),
(1491466521, NULL, NULL),
(1491466531, NULL, NULL),
(1491466532, NULL, NULL),
(1491466533, NULL, NULL),
(1491466534, NULL, NULL),
(1491468036, NULL, NULL),
(1491468239, NULL, NULL),
(1491468293, NULL, NULL),
(1491468302, NULL, NULL),
(1491468306, NULL, NULL),
(1491468356, NULL, NULL),
(1491468360, NULL, NULL),
(1491468598, NULL, NULL),
(1491481334, NULL, NULL),
(1491481477, NULL, NULL),
(1491481486, NULL, NULL),
(1491481490, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `session_type`
--

CREATE TABLE IF NOT EXISTS `session_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE IF NOT EXISTS `team` (
  `id` int(11) NOT NULL,
  `session_id` int(11) NOT NULL,
  `color` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `session_id`, `color`) VALUES
(1, 1491406621, 'red'),
(2, 1491406621, 'blue'),
(3, 1491406621, 'all'),
(4, 1491406626, 'red'),
(5, 1491406626, 'blue'),
(6, 1491406626, 'all'),
(7, 1491406627, 'red'),
(8, 1491406627, 'blue'),
(9, 1491406627, 'all'),
(10, 1491406628, 'red'),
(11, 1491406628, 'blue'),
(12, 1491406628, 'all'),
(13, 1491406900, 'red'),
(14, 1491406900, 'blue'),
(15, 1491406900, 'all'),
(16, 1491409988, 'red'),
(17, 1491409988, 'blue'),
(18, 1491409988, 'all'),
(19, 1491465351, 'red'),
(20, 1491465351, 'blue'),
(21, 1491465351, 'all'),
(22, 1491465543, 'red'),
(23, 1491465543, 'blue'),
(24, 1491465543, 'all'),
(25, 1491465551, 'red'),
(26, 1491465551, 'blue'),
(27, 1491465551, 'all'),
(28, 1491465552, 'red'),
(29, 1491465552, 'blue'),
(30, 1491465552, 'all'),
(31, 0, 'red'),
(32, 0, 'blue'),
(33, 0, 'all'),
(34, 1491465553, 'red'),
(35, 1491465553, 'blue'),
(36, 1491465553, 'all'),
(37, 1491465620, 'red'),
(38, 1491465620, 'blue'),
(39, 1491465620, 'all'),
(40, 1491465622, 'red'),
(41, 1491465622, 'blue'),
(42, 1491465622, 'all'),
(43, 1491465623, 'red'),
(44, 1491465623, 'blue'),
(45, 1491465623, 'all'),
(46, 1491465728, 'red'),
(47, 1491465728, 'blue'),
(48, 1491465728, 'all'),
(49, 1491465928, 'red'),
(50, 1491465928, 'blue'),
(51, 1491465928, 'all'),
(52, 1491466054, 'red'),
(53, 1491466054, 'blue'),
(54, 1491466054, 'all'),
(55, 1491466465, 'red'),
(56, 1491466465, 'blue'),
(57, 1491466465, 'all'),
(58, 1491466467, 'red'),
(59, 1491466467, 'blue'),
(60, 1491466467, 'all'),
(61, 1491466468, 'red'),
(62, 1491466468, 'blue'),
(63, 1491466468, 'all'),
(64, 1491466471, 'red'),
(65, 1491466471, 'blue'),
(66, 1491466471, 'all'),
(67, 1491466472, 'red'),
(68, 1491466472, 'blue'),
(69, 1491466472, 'all'),
(70, 1491466473, 'red'),
(71, 1491466473, 'blue'),
(72, 1491466473, 'all'),
(73, 0, 'red'),
(74, 0, 'blue'),
(75, 0, 'all'),
(76, 1491466514, 'red'),
(77, 1491466514, 'blue'),
(78, 1491466514, 'all'),
(79, 1491466515, 'red'),
(80, 1491466515, 'blue'),
(81, 1491466515, 'all'),
(82, 1491466516, 'red'),
(83, 1491466516, 'blue'),
(84, 1491466516, 'all'),
(85, 1491466521, 'red'),
(86, 1491466521, 'blue'),
(87, 1491466521, 'all'),
(88, 1491466531, 'red'),
(89, 1491466531, 'blue'),
(90, 1491466531, 'all'),
(91, 1491466532, 'red'),
(92, 1491466532, 'blue'),
(93, 1491466532, 'all'),
(94, 1491466533, 'red'),
(95, 1491466533, 'blue'),
(96, 1491466533, 'all'),
(97, 1491466534, 'red'),
(98, 1491466534, 'blue'),
(99, 1491466534, 'all'),
(100, 1491468036, 'red'),
(101, 1491468036, 'blue'),
(102, 1491468036, 'all'),
(103, 1491468239, 'red'),
(104, 1491468239, 'blue'),
(105, 1491468239, 'all'),
(106, 1491468293, 'red'),
(107, 1491468293, 'blue'),
(108, 1491468293, 'all'),
(109, 1491468302, 'red'),
(110, 1491468302, 'blue'),
(111, 1491468302, 'all'),
(112, 1491468306, 'red'),
(113, 1491468306, 'blue'),
(114, 1491468306, 'all'),
(115, 1491468356, 'red'),
(116, 1491468356, 'blue'),
(117, 1491468356, 'all'),
(118, 1491468360, 'red'),
(119, 1491468360, 'blue'),
(120, 1491468360, 'all'),
(121, 1491468598, 'red'),
(122, 1491468598, 'blue'),
(123, 1491468598, 'all'),
(124, 1491481334, 'red'),
(125, 1491481334, 'blue'),
(126, 1491481334, 'all'),
(127, 1491481477, 'red'),
(128, 1491481477, 'blue'),
(129, 1491481477, 'all'),
(130, 1491481486, 'red'),
(131, 1491481486, 'blue'),
(132, 1491481486, 'all'),
(133, 1491481490, 'red'),
(134, 1491481490, 'blue'),
(135, 1491481490, 'all');

-- --------------------------------------------------------

--
-- Table structure for table `team_players`
--

CREATE TABLE IF NOT EXISTS `team_players` (
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `team_stats`
--

CREATE TABLE IF NOT EXISTS `team_stats` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `current_session`
--
ALTER TABLE `current_session`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`card_id`);

--
-- Indexes for table `player_stats`
--
ALTER TABLE `player_stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prepare_game`
--
ALTER TABLE `prepare_game`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session_type`
--
ALTER TABLE `session_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_players`
--
ALTER TABLE `team_players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_stats`
--
ALTER TABLE `team_stats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `player_stats`
--
ALTER TABLE `player_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `session_type`
--
ALTER TABLE `session_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=136;
--
-- AUTO_INCREMENT for table `team_players`
--
ALTER TABLE `team_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
