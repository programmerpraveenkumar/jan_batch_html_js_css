-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 21, 2021 at 07:01 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news_magazine`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `content_id` int(11) DEFAULT NULL,
  `posted_by` int(11) DEFAULT NULL,
  `comment_text` text DEFAULT NULL,
  `comment_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `news_content`
--

CREATE TABLE `news_content` (
  `content_id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `posted_by_id` int(11) DEFAULT NULL,
  `posted_by_name` varchar(100) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `tags` text DEFAULT NULL,
  `posted_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news_content`
--

INSERT INTO `news_content` (`content_id`, `title`, `content`, `posted_by_id`, `posted_by_name`, `city_id`, `tags`, `posted_time`) VALUES
(1, 'updated for ajax testing', 'sample content', NULL, 'test username ', 1, '#test #sample_post', '2021-03-16 12:26:35'),
(2, 'sample title2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae arcu at neque commodo pretium. Cras in mollis orci. Aenean id rutrum magna. In ultrices posuere lacinia. Curabitur scelerisque dictum purus quis posuere. Donec hendrerit interdum blandit. Integer dolor nunc, vestibulum semper placerat sit amet, tempor vel neque. Sed venenatis velit sed nisi feugiat luctus. Donec hendrerit faucibus tellus, vel tempus magna vestibulum at. Sed imperdiet massa a massa cursus imperdiet. Sed sagittis imperdiet eros. Nulla et odio lacinia, ullamcorper mi vel, posuere lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\nFusce volutpat lorem nec dui tempus porta. Nunc aliquam metus non vulputate eleifend. Mauris vel arcu at eros ullamcorper imperdiet. Mauris efficitur felis dapibus sapien accumsan fermentum. Quisque accumsan vestibulum tellus, eu malesuada nibh bibendum in. Cras ut nisl sit amet mauris euismod iaculis. Ut a efficitur justo. Phasellus dapibus leo eget varius posuere. Aliquam eu volutpat nisi.', NULL, 'test username ', 1, '#test #sample_post', '2021-03-16 12:53:38'),
(3, 'sample testing ', 'sample testing content for news website', NULL, NULL, NULL, NULL, '2021-03-18 12:12:12'),
(4, 'Trichy sample testing ', 'Trichy sample testing content for news website', NULL, NULL, 2, NULL, '2021-03-18 12:29:43'),
(5, 'Trichy sample testing2 ', 'Trichy sample testing content for news website2', NULL, NULL, 2, NULL, '2021-03-18 12:29:53'),
(6, 'Trichy sample testing3 ', 'Trichy sample testing content for news website3', NULL, NULL, 2, NULL, '2021-03-18 12:35:33'),
(8, 'sample title from browser', 'sample content from browser', NULL, 'from browser', 1, NULL, '2021-03-21 05:35:01'),
(9, 'lhj', 'lkjh', NULL, 'sdfsdfsd', 1, NULL, '2021-03-21 05:44:12'),
(10, 'for trichy news title', 'for trichy news content', NULL, 'unkonw user from trichy', 2, '#sample #trichy', '2021-03-21 05:47:57'),
(11, 'simeple testing for madurai', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna magna, porta ut lorem vel, finibus venenatis mauris. Fusce luctus faucibus tellus eget ornare. Proin quis est non odio tristique cursus nec non felis. Donec accumsan massa accumsan leo lobortis volutpat. Morbi lacus lectus, tristique et hendrerit ac, sodales vel mi. Duis dolor justo, fringilla at accumsan vitae, pulvinar a libero. Etiam dignissim ex id urna eleifend, ac interdum magna imperdiet. Nullam venenatis rhoncus mauris, placerat dictum ligula sollicitudin vel. Vestibulum erat ante, dictum eu risus id, tincidunt molestie mauris. Etiam a sapien placerat, pharetra odio ac, aliquam purus. Maecenas ac blandit diam. Proin a purus vitae magna sagittis aliquam at a nisi.\r\n\r\nNam egestas, dui in dignissim rhoncus, augue arcu fermentum velit, ut faucibus nulla quam nec nisi. Donec lacinia suscipit tortor, id aliquam neque vestibulum sed. Nam vitae facilisis erat. Sed dignissim et augue et fringilla. Duis sit amet nulla enim. Curabitur malesuada nec magna vitae fermentum. Aliquam neque nulla, euismod ac vehicula vitae, sodales eget magna.', NULL, 'sample user for madaurai', 3, '#madurai', '2021-03-21 05:50:11'),
(12, 'simeple testing for madurai1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna magna, porta ut lorem vel, finibus venenatis mauris. Fusce luctus faucibus tellus eget ornare. Proin quis est non odio tristique cursus nec non felis. Donec accumsan massa accumsan leo lobortis volutpat. Morbi lacus lectus, tristique et hendrerit ac, sodales vel mi. Duis dolor justo, fringilla at accumsan vitae, pulvinar a libero. Etiam dignissim ex id urna eleifend, ac interdum magna imperdiet. Nullam venenatis rhoncus mauris, placerat dictum ligula sollicitudin vel. Vestibulum erat ante, dictum eu risus id, tincidunt molestie mauris. Etiam a sapien placerat, pharetra odio ac, aliquam purus. Maecenas ac blandit diam. Proin a purus vitae magna sagittis aliquam at a nisi.\r\n\r\nNam egestas, dui in dignissim rhoncus, augue arcu fermentum velit, ut faucibus nulla quam nec nisi. Donec lacinia suscipit tortor, id aliquam neque vestibulum sed. Nam vitae facilisis erat. Sed dignissim et augue et fringilla. Duis sit amet nulla enim. Curabitur malesuada nec magna vitae fermentum. Aliquam neque nulla, euismod ac vehicula vitae, sodales eget magna.', NULL, 'sample user for madaurai1', 3, '#madurai', '2021-03-21 05:54:35');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `news_content`
--
ALTER TABLE `news_content`
  ADD PRIMARY KEY (`content_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news_content`
--
ALTER TABLE `news_content`
  MODIFY `content_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
