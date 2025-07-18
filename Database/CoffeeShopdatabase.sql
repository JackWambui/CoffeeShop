-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2025 at 07:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffeeshopdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `bank_id` int(11) NOT NULL,
  `mode_of_payment` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `card_number` varchar(255) NOT NULL,
  `security_code` int(3) NOT NULL,
  `card_expiration` varchar(5) NOT NULL,
  `balance` float NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`bank_id`, `mode_of_payment`, `first_name`, `last_name`, `card_number`, `security_code`, `card_expiration`, `balance`, `created_at`, `updated_at`) VALUES
(1, 'MasterCard', 'Rebekah', 'Rebekah', '1111', 111, '08/30', 10000, '2025-07-08 16:19:24', '2025-07-08 16:19:24'),
(2, 'VISA', 'Nedup', 'Nedup', '2222', 222, '08/30', 10000, '2025-07-08 16:23:21', '2025-07-08 16:23:21'),
(3, 'PayPal', 'Dawa', 'Dawa', '3333', 333, '08/30', 10000, '2025-07-08 16:23:59', '2025-07-08 16:23:59'),
(4, 'MasterCard', 'Jack', 'Kariuki', '4444', 444, '08/30', 9581.47, '2025-07-08 16:24:33', '2025-07-08 16:24:33');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'coffee', 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D', '2025-06-28 17:47:59', '2025-06-28 17:47:59'),
(2, 'Cakes', 'https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZXN8ZW58MHx8MHx8fDA%3D', '2025-07-01 22:23:19', '2025-07-01 22:23:19'),
(3, 'tea', 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D', '2025-07-01 22:23:19', '2025-07-01 22:23:19'),
(4, 'Refreshers', 'https://plus.unsplash.com/premium_photo-1664392073748-35c3a1c3c385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmcmVzaGVyc3xlbnwwfHwwfHx8MA%3D%3D', '2025-07-01 22:23:20', '2025-07-01 22:23:20'),
(5, 'Ice Cream', 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGljZWNyZWFtfGVufDB8fDB8fHww', '2025-07-01 22:23:20', '2025-07-01 22:23:20'),
(6, 'Food', 'https://images.unsplash.com/photo-1583019107470-5bf8e4a96314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZvb2QlMjBpbiUyMGElMjBib3dsfGVufDB8fDB8fHww', '2025-07-01 22:23:20', '2025-07-01 22:23:20');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'testuser', '2025-06-28 17:47:09', '2025-06-28 17:47:09');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_number` varchar(255) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_status` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_number`, `customer_id`, `order_status`, `created_at`, `updated_at`) VALUES
(1, 'ORD-20250712-37407', 1, 'processing', '2025-07-12 21:55:05', '2025-07-12 21:55:05'),
(2, 'ORD-20250712-83023', 1, 'processing', '2025-07-12 21:56:40', '2025-07-12 21:56:40'),
(3, 'ORD-20250712-54508', 1, 'processing', '2025-07-13 01:29:29', '2025-07-13 01:29:29'),
(4, 'ORD-20250712-95903', 1, 'processing', '2025-07-13 02:04:56', '2025-07-13 02:04:56'),
(5, 'ORD-20250712-44329', 1, 'processing', '2025-07-13 02:11:55', '2025-07-13 02:11:55'),
(6, 'ORD-20250713-697', 1, 'processing', '2025-07-13 15:45:48', '2025-07-13 15:45:48'),
(7, 'ORD-20250713-202', 1, 'processing', '2025-07-13 15:47:56', '2025-07-13 15:47:56'),
(8, 'ORD-20250714-790', 1, 'processing', '2025-07-14 21:18:32', '2025-07-14 21:18:32'),
(9, 'ORD-20250714-735', 1, 'processing', '2025-07-15 00:01:24', '2025-07-15 00:01:24'),
(10, 'ORD-20250715-366', 1, 'processing', '2025-07-15 16:00:46', '2025-07-15 16:00:46'),
(11, 'ORD-20250715-258', 1, 'processing', '2025-07-15 16:02:04', '2025-07-15 16:02:04'),
(12, 'ORD-20250715-851', 1, 'processing', '2025-07-15 16:18:13', '2025-07-15 16:18:13'),
(13, 'ORD-20250715-428', 1, 'processing', '2025-07-15 21:34:08', '2025-07-15 21:34:08'),
(14, 'ORD-20250715-122', 1, 'processing', '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(15, 'ORD-20250716-533', 1, 'processing', '2025-07-16 22:51:25', '2025-07-16 22:51:25'),
(16, 'ORD-20250717-455', 1, 'processing', '2025-07-18 03:02:24', '2025-07-18 03:02:24');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_items_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_items_id`, `order_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, '2025-07-12 21:55:05', '2025-07-12 21:55:05'),
(2, 2, 1, 4, '2025-07-12 21:56:40', '2025-07-12 21:56:40'),
(3, 2, 5, 3, '2025-07-12 21:56:40', '2025-07-12 21:56:40'),
(4, 3, 3, 2, '2025-07-13 01:29:29', '2025-07-13 01:29:29'),
(5, 4, 4, 4, '2025-07-13 02:04:56', '2025-07-13 02:04:56'),
(6, 5, 2, 2, '2025-07-13 02:11:55', '2025-07-13 02:11:55'),
(7, 5, 7, 4, '2025-07-13 02:11:55', '2025-07-13 02:11:55'),
(8, 6, 2, 3, '2025-07-13 15:45:48', '2025-07-13 15:45:48'),
(9, 6, 8, 3, '2025-07-13 15:45:48', '2025-07-13 15:45:48'),
(10, 7, 2, 1, '2025-07-13 15:47:56', '2025-07-13 15:47:56'),
(11, 8, 2, 8, '2025-07-14 21:18:32', '2025-07-14 21:18:32'),
(12, 8, 8, 3, '2025-07-14 21:18:32', '2025-07-14 21:18:32'),
(13, 8, 7, 1, '2025-07-14 21:18:32', '2025-07-14 21:18:32'),
(14, 9, 1, 2, '2025-07-15 00:01:24', '2025-07-15 00:01:24'),
(15, 10, 3, 1, '2025-07-15 16:00:47', '2025-07-15 16:00:47'),
(16, 11, 6, 2, '2025-07-15 16:02:04', '2025-07-15 16:02:04'),
(17, 12, 8, 2, '2025-07-15 16:18:13', '2025-07-15 16:18:13'),
(18, 13, 2, 2, '2025-07-15 21:34:08', '2025-07-15 21:34:08'),
(19, 13, 7, 4, '2025-07-15 21:34:08', '2025-07-15 21:34:08'),
(20, 13, 3, 3, '2025-07-15 21:34:08', '2025-07-15 21:34:08'),
(21, 13, 5, 2, '2025-07-15 21:34:09', '2025-07-15 21:34:09'),
(22, 14, 3, 1, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(23, 14, 6, 1, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(24, 14, 12, 1, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(25, 14, 15, 1, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(26, 14, 19, 1, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(27, 14, 21, 1, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(28, 14, 21, 1, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(29, 15, 23, 1, '2025-07-16 22:51:25', '2025-07-16 22:51:25'),
(30, 15, 13, 2, '2025-07-16 22:51:25', '2025-07-16 22:51:25'),
(31, 16, 2, 2, '2025-07-18 03:02:24', '2025-07-18 03:02:24');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `mode_of_payment` varchar(255) NOT NULL,
  `total_order_cost` float NOT NULL,
  `amount_paid` float NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`payment_id`, `order_id`, `mode_of_payment`, `total_order_cost`, `amount_paid`, `created_at`, `updated_at`) VALUES
(1, 6, 'MasterCard', 29.97, 29.97, '2025-07-13 15:45:48', '2025-07-13 15:45:48'),
(2, 7, 'MasterCard', 4, 4, '2025-07-13 15:47:56', '2025-07-13 15:47:56'),
(3, 8, 'MasterCard', 54.47, 54.47, '2025-07-14 21:18:32', '2025-07-14 21:18:32'),
(4, 9, 'MasterCard', 8.6, 8.6, '2025-07-15 00:01:24', '2025-07-15 00:01:24'),
(5, 10, 'MasterCard', 5, 5, '2025-07-15 16:00:47', '2025-07-15 16:00:47'),
(6, 11, 'MasterCard', 13.98, 13.98, '2025-07-15 16:02:05', '2025-07-15 16:02:05'),
(7, 12, 'MasterCard', 11.98, 11.98, '2025-07-15 16:18:13', '2025-07-15 16:18:13'),
(8, 13, 'MasterCard', 54.98, 54.98, '2025-07-15 21:34:09', '2025-07-15 21:34:09'),
(9, 14, 'MasterCard', 30.14, 30.14, '2025-07-16 04:42:51', '2025-07-16 04:42:51'),
(10, 15, 'MasterCard', 13.5, 13.5, '2025-07-16 22:51:25', '2025-07-16 22:51:25'),
(11, 16, 'MasterCard', 8, 8, '2025-07-18 03:02:24', '2025-07-18 03:02:24');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `image`, `price`, `description`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Americano', 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW5vfGVufDB8fDB8fHww', 4.3, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, '2025-06-28 17:50:10', '2025-06-28 17:50:10'),
(2, 'Brewed Coffee', 'https://images.unsplash.com/photo-1638202525812-53881ca0f4b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGJyZXdlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D', 4, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, '2025-07-01 22:34:05', '2025-07-01 22:34:05'),
(3, 'Caffe Latte', 'https://plus.unsplash.com/premium_photo-1670445287762-372300cdcb77?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZmUlMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D', 5, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, '2025-07-01 22:34:06', '2025-07-01 22:34:06'),
(4, 'Caffe Mocha', 'https://images.unsplash.com/photo-1650486280607-93d026bd5213?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNhZmZlJTIwbW9jaGF8ZW58MHx8MHx8fDA%3D', 3.6, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 1, '2025-07-01 22:34:06', '2025-07-01 22:34:06'),
(5, 'Chocolate Cake', 'https://plus.unsplash.com/premium_photo-1715015440855-7d95cf92608a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D', 6.99, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 2, '2025-07-01 22:34:06', '2025-07-01 22:34:06'),
(6, 'Red Velvet Cake', 'https://plus.unsplash.com/premium_photo-1713920189815-876dbdf5f56e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVkJTIwVmVsdmV0JTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D', 6.99, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 2, '2025-07-01 22:34:06', '2025-07-01 22:34:06'),
(7, 'Vanilla Cake', 'https://plus.unsplash.com/premium_photo-1663839331055-d0c9bcb2929f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmFuaWxsYSUyMENha2V8ZW58MHx8MHx8fDA%3D', 4.5, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 2, '2025-07-01 22:34:06', '2025-07-01 22:34:06'),
(8, 'Black Forest Cake', 'https://plus.unsplash.com/premium_photo-1715178982048-d36eba937bc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjBGb3Jlc3QlMjBDYWtlfGVufDB8fDB8fHww', 5.99, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 2, '2025-07-01 22:34:06', '2025-07-01 22:34:06'),
(9, 'Green Tea', 'https://images.unsplash.com/photo-1701520839071-55bdfe64c5ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JlZW4lMjBUZWF8ZW58MHx8MHx8fDA%3D', 3.5, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 3, '2025-07-16 04:14:55', '2025-07-16 04:14:55'),
(10, 'Black Tea', 'https://images.unsplash.com/photo-1644762396867-b43bc53be282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJsYWNrJTIwVGVhfGVufDB8fDB8fHww', 2.99, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 3, '2025-07-16 04:16:13', '2025-07-16 04:16:13'),
(11, 'Oolong Tea', 'https://images.unsplash.com/photo-1577016029703-cc22a7c0c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE9vbG9uZyUyMFRlYXxlbnwwfHwwfHx8MA%3D%3D', 4.8, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 3, '2025-07-16 04:18:14', '2025-07-16 04:18:14'),
(12, 'Chai', 'https://images.unsplash.com/photo-1616109757495-706fcf65a25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWl8ZW58MHx8MHx8fDA%3D', 4, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 3, '2025-07-16 04:19:33', '2025-07-16 04:19:33'),
(13, 'Lemonade', 'https://images.unsplash.com/photo-1690983319841-ef2559d164b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGVtb25hZGV8ZW58MHx8MHx8fDA%3D', 2.5, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 4, '2025-07-16 04:24:08', '2025-07-16 04:24:08'),
(14, 'Sparkling Water', 'https://images.unsplash.com/photo-1626810333910-c4a297aff6ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFNwYXJrbGluZyUyMFdhdGVyfGVufDB8fDB8fHww', 2.99, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 4, '2025-07-16 04:25:58', '2025-07-16 04:25:58'),
(15, 'Mango Smoothie', 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuZ28lMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D', 2, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 4, '2025-07-16 04:26:49', '2025-07-16 04:26:49'),
(16, 'Coca Cola', 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D', 1.5, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 4, '2025-07-16 04:28:00', '2025-07-16 04:28:00'),
(17, 'Regular Ice Cream', 'https://plus.unsplash.com/premium_photo-1733306657240-a398488ea835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVndWxhciUyMEljZSUyMENyZWFtfGVufDB8fDB8fHww', 1.2, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 5, '2025-07-16 04:29:41', '2025-07-16 04:29:41'),
(18, 'Gelato', 'https://images.unsplash.com/photo-1637507757297-cd860b7aa216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2VsYXRvJTIwaWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D', 1.5, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 5, '2025-07-16 04:30:59', '2025-07-16 04:30:59'),
(19, 'Frozen Yogurt', 'https://images.unsplash.com/photo-1669127045641-0ae683639570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnJvemVuJTIwWW9ndXJ0fGVufDB8fDB8fHww', 1.35, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 5, '2025-07-16 04:31:48', '2025-07-16 04:31:48'),
(20, 'Sorbet', 'https://images.unsplash.com/photo-1650553448920-9432f8086905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29yYmV0fGVufDB8fDB8fHww', 1.45, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 5, '2025-07-16 04:32:40', '2025-07-16 04:32:40'),
(21, 'Pizza', 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGl6emF8ZW58MHx8MHx8fDA%3D', 5.4, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 6, '2025-07-16 04:36:27', '2025-07-16 04:36:27'),
(22, 'Biryani', 'https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D', 7, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 6, '2025-07-16 04:37:22', '2025-07-16 04:37:22'),
(23, 'BBQ Ribs & Fries', 'https://images.unsplash.com/photo-1723437395525-77b08e41e53c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QkJRJTIwUmlic3xlbnwwfHwwfHx8MA%3D%3D', 8.5, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 6, '2025-07-16 04:38:45', '2025-07-16 04:38:45'),
(24, 'Tacos', 'https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjb3N8ZW58MHx8MHx8fDA%3D', 6.4, 'Lorem100 Magna dolor enim reprehenderit ipsum elit id sint nostrud ad. Dolore non nostrud duis do culpa. Reprehenderit velit ea dolor commodo incididunt nulla fugiat.', 6, '2025-07-16 04:40:49', '2025-07-16 04:40:49');

-- --------------------------------------------------------

--
-- Table structure for table `product_reviews`
--

CREATE TABLE `product_reviews` (
  `product_review_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `rating_count` int(11) NOT NULL,
  `rating_stars` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_reviews`
--

INSERT INTO `product_reviews` (`product_review_id`, `customer_id`, `product_id`, `description`, `rating_count`, `rating_stars`) VALUES
(1, 1, 1, NULL, 200, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`bank_id`),
  ADD UNIQUE KEY `card_number` (`card_number`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD UNIQUE KEY `order_number` (`order_number`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_items_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`product_review_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_items_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `product_review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD CONSTRAINT `product_reviews_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `product_reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
