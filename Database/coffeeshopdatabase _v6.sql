-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2025 at 01:03 AM
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
-- Table structure for table `administrator`
--

CREATE TABLE `administrator` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `administrator`
--

INSERT INTO `administrator` (`admin_id`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', '0192023a7bbd73250516f069df18b500', '2025-07-30 03:35:05', '2025-07-30 03:35:05');

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
(4, 'MasterCard', 'Jack', 'Kariuki', '4444', 444, '08/30', 10000, '2025-07-08 16:24:33', '2025-07-08 16:24:33'),
(5, 'PayPal', 'Kiran', 'Kiran', '5555', 555, '07/29', 10000, '2025-07-31 09:02:08', '2025-07-31 09:02:08');

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
  `Customer_Username` varchar(255) NOT NULL,
  `Customer_FName` varchar(255) NOT NULL,
  `Customer_LName` varchar(255) NOT NULL,
  `Customer_EmailAddress` varchar(255) NOT NULL,
  `Customer_Password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `Customer_Username`, `Customer_FName`, `Customer_LName`, `Customer_EmailAddress`, `Customer_Password`, `created_at`, `updated_at`) VALUES
(1, 'rebekah@25', 'Rebekah', 'Rebekah', 'rebekah@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2025-07-30 10:18:14', '2025-07-30 10:18:14'),
(2, 'dawa@21', 'dawa', 'dawa', 'dawa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2025-07-31 08:45:58', '2025-07-31 08:45:58');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `emp_Id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `Start_date` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`emp_Id`, `firstname`, `lastname`, `email`, `position`, `Start_date`, `created_at`, `updated_at`) VALUES
(1, 'Nedup', 'Nedup', 'nedup@gmail.com', 'Manager', '2025-07-15', '2025-07-30 09:59:26', '2025-07-30 09:59:26'),
(2, 'Rebekah', 'Rebekah', 'rebekah@gmail.com', 'Barista', '2025-07-28', '2025-07-30 10:06:15', '2025-07-30 10:06:15');

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
(11, 16, 'MasterCard', 8, 8, '2025-07-18 03:02:24', '2025-07-18 03:02:24'),
(12, 17, 'MasterCard', 14.59, 14.59, '2025-07-18 03:06:43', '2025-07-18 03:06:43'),
(13, 1, 'MasterCard', 16.99, 16.99, '2025-07-18 03:09:24', '2025-07-18 03:09:24'),
(14, 2, 'MasterCard', 5.98, 5.98, '2025-07-18 22:32:40', '2025-07-18 22:32:40'),
(15, 3, 'MasterCard', 9, 9, '2025-07-19 23:15:09', '2025-07-19 23:15:09'),
(16, 4, 'MasterCard', 21.18, 21.18, '2025-07-19 23:21:54', '2025-07-19 23:21:54'),
(17, 5, 'MasterCard', 9.39, 9.39, '2025-07-19 23:24:10', '2025-07-19 23:24:10'),
(18, 6, 'MasterCard', 13.1, 13.1, '2025-07-21 15:22:25', '2025-07-21 15:22:25'),
(19, 7, 'MasterCard', 12, 12, '2025-07-21 23:05:33', '2025-07-21 23:05:33'),
(20, 8, 'MasterCard', 20, 20, '2025-07-23 22:35:04', '2025-07-23 22:35:04'),
(21, 9, 'MasterCard', 22.58, 22.58, '2025-07-31 08:03:44', '2025-07-31 08:03:44'),
(22, 10, 'MasterCard', 8, 8, '2025-07-31 08:16:27', '2025-07-31 08:16:27'),
(23, 11, 'MasterCard', 19.99, 19.99, '2025-07-31 08:43:39', '2025-07-31 08:43:39'),
(24, 12, 'MasterCard', 16, 16, '2025-07-31 08:46:54', '2025-07-31 08:46:54');

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

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_phone` varchar(255) NOT NULL,
  `customer_message` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `customer_name`, `customer_email`, `customer_phone`, `customer_message`, `created_at`, `updated_at`) VALUES
(1, 'Jeff', 'jeff@gmail.com', '5443232332', 'outkast', '2025-07-30 02:21:10', '2025-07-30 02:21:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`admin_id`);

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
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`emp_Id`);

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
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrator`
--
ALTER TABLE `administrator`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `emp_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_items_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
