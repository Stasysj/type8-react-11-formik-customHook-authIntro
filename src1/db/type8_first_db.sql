-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 20, 2022 at 07:32 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `type8_first_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `created_at`) VALUES
(1, 'Technology', '2022-04-29 09:02:54'),
(2, 'Design', '2022-04-29 09:03:01');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `edited_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `rating` int(1) NOT NULL DEFAULT '0',
  `archived` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `edited_at`, `author`, `title`, `body`, `rating`, `archived`) VALUES
(1, '2022-04-26 07:36:32', 'James', 'Post 1', 'This is the body of Post 1. Hello SQL', 4, 0),
(2, '2022-04-26 08:01:42', 'Mike', 'CSS', 'CSS is the decorative type of html web', 5, 1),
(3, '2022-04-26 08:17:51', 'James', 'JS', 'JS is all about interaction and functionality on the web', 2, 1),
(4, '2022-04-26 07:44:34', 'Mike', 'NODE', 'Node is js in the server', 5, 0),
(5, '2022-04-26 07:44:34', 'Jane', 'Design', 'All web is going to be awesome', 4, 0),
(6, '2022-04-28 06:54:16', 'Jill', 'Css is great', 'Css is flexxxxx', 5, 0),
(10, '2022-04-28 08:55:23', 'Jill', 'Css is great', 'Css is flexxxxx', 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `shirts`
--

CREATE TABLE `shirts` (
  `id` int(10) UNSIGNED NOT NULL,
  `brand` text NOT NULL,
  `model` text NOT NULL,
  `size` text NOT NULL,
  `price` decimal(2,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shirts`
--

INSERT INTO `shirts` (`id`, `brand`, `model`, `size`, `price`) VALUES
(1, 'H&M', 'Slim Fit', 'M', '25'),
(2, 'H&M', 'Normal Fit', 'L', '25'),
(3, 'Versace', 'Normal fit', 'S', '59'),
(4, 'Naujas Brandas', 'All fit', 'XL', '12'),
(5, 'H&M', 'Slim Fit', 'S', '15'),
(6, 'Versace', 'All fit Gold', 'M', '80'),
(7, 'H&M', 'Slim Fit', 'S', '15'),
(8, 'Versace', 'All fit Gold', 'M', '80'),
(9, 'Naujas Brand', 'All fit', 'XL', '12'),
(10, 'Naujas Brand', 'Slim fit', 'M', '15'),
(11, 'Naujas Brand', 'All fit', 'XL', '12'),
(12, 'Naujas Brand', 'Slim fit', 'M', '15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shirts`
--
ALTER TABLE `shirts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `shirts`
--
ALTER TABLE `shirts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
