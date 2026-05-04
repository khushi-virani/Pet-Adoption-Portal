-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2026 at 12:44 PM
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
-- Database: `petdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbladoption_requests`
--

CREATE TABLE `tbladoption_requests` (
  `request_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pet_id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `address` text NOT NULL,
  `status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbladoption_requests`
--

INSERT INTO `tbladoption_requests` (`request_id`, `user_id`, `pet_id`, `full_name`, `email`, `phone`, `address`, `status`) VALUES
(11, 4, 101, 'shrimankar hetvi anilbhai', 'hetvi@gmial.com', '1236547895', '12,avenue park,VIP Road,Surat', 'Rejected'),
(12, 3, 201, 'aakholiya axita vijaybhai', 'axita@gmail.com', '8695758091', '40, Santosa Park, Mota Varachha, Surat', 'Rejected'),
(13, 3, 302, 'aakholiya axita vijaybhai', 'axita@gmail.com', '1236547895', '15,santosha park, vip road, surat', 'Accepted'),
(14, 5, 202, 'sanepara manali v.', 'manali@gmail.com', '9568365218', '102,abc park,vip road, surat', 'Accepted'),
(15, 6, 101, 'vasoya meera a.', 'meera@gmail.com', '9568365218', '105,abc park,surat', 'Rejected'),
(16, 7, 102, 'mavani riya j.', 'riya@gmail.com', '9568365218', 'whdkwus', 'Rejected'),
(17, 3, 105, 'aakholiya axita vijaybhai', 'axita@gmail.com', '1236547895', '105, Santotsa Plaza, VIP Road, Surat', 'Rejected');

-- --------------------------------------------------------

--
-- Table structure for table `tblcategory`
--

CREATE TABLE `tblcategory` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcategory`
--

INSERT INTO `tblcategory` (`category_id`, `category_name`) VALUES
(1, 'dog'),
(2, 'cat'),
(3, 'bunny');

-- --------------------------------------------------------

--
-- Table structure for table `tbllogin`
--

CREATE TABLE `tbllogin` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(220) NOT NULL,
  `ikey` varchar(20) NOT NULL,
  `utype` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbllogin`
--

INSERT INTO `tbllogin` (`id`, `username`, `password`, `ikey`, `utype`) VALUES
(1, 'admin', '0192023a7bbd73250516f069df18b500', 'khushi', 'admin'),
(2, 'darshita', '472a78906c2c25217be84369c678b2f3', 'data28', 'user'),
(3, 'axita', '1853ecfef2e9647b9fb1a4e3f44e9653', 'axta28', 'user'),
(4, 'hetvi', '93e1b7d6d6cd55d2abfc69afc9820bfe', 'hevi28', 'user'),
(5, 'manali', '9448d92bef0683a1ceea58c12e22a221', 'mali28', 'user'),
(6, 'meera', 'bae62f6e2f0791bf7555193eea62f08d', 'mera12', 'user'),
(7, 'riya', '37a408af825fe17c81c350113738b046', 'riya12', 'user'),
(8, 'kiya roy', '2c1c458eda702f90e7eca3cc59a7a6da', 'kiya12', 'user'),
(9, 'priya', '6bc93fcb299cf3332b326ed44a01a196', 'priya12', 'user'),
(10, 'abc', 'a141c47927929bc2d1fb6d336a256df4', 'abc12', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `tblpets`
--

CREATE TABLE `tblpets` (
  `pet_id` int(11) NOT NULL,
  `pet_name` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `breed` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblpets`
--

INSERT INTO `tblpets` (`pet_id`, `pet_name`, `category_id`, `age`, `breed`, `image`, `description`) VALUES
(101, 'Buddy', 1, 3, 'Labrador Retriever', 'image/d1.jpeg', ' A cheerful dog who loves fetch and belly rubs. He’s always ready for fun and cuddles.'),
(102, 'Max', 1, 2, 'German Shepherd', 'image/d2.jpeg', 'Max is playful and smart, always eager to learn. He thrives in an active home. '),
(103, 'Charlie', 1, 3, 'Beagle', 'image/d3.jpeg', 'Energetic and loyal, perfect for an active family.'),
(104, 'Daisy', 1, 6, 'Pug', 'image/d4.jpeg', 'Gentle and friendly, Daisy loves everyone she meets. She’s happiest around people.'),
(105, 'Bella', 1, 2, ' Golden Retriever', 'image/d10.jpeg', 'Soft-hearted and calm, Bella is easy to love. She’s looking for a quiet, kind home.'),
(106, 'Rocky', 1, 2, 'Dalmatian', 'image/d6.jpeg', 'Full of energy and love, Rocky is loyal and brave. A perfect companion for adventures.'),
(107, 'Coco', 1, 4, 'Rottweiler', 'image/d7.jpeg', 'Coco loves toys and long naps. She’s affectionate and loves being near her people.'),
(108, 'Milo', 1, 5, 'Siberian Husky', 'image/d11.jpeg', 'Energetic and goofy, Milo brings laughter wherever he goes. Great with kids!'),
(201, 'Whiskers', 2, 2, 'Persian', 'image/c2.jpeg', '2-year-old friendly tabby cat looking for a loving home.'),
(202, 'Luna', 2, 3, 'Siamese', 'image/c9.jpeg', 'A confident, chill cat who loves pets. Leo is perfect for laid-back homes.'),
(203, 'Oliver', 2, 1, 'Maine Coon', 'image/c4.jpeg', 'Oliver is fun, talkative, and full of charm. He loves being around people.'),
(204, 'Cleo', 2, 4, 'Bengal', 'image/c5.jpeg', 'Elegant and sweet, Cleo enjoys cuddles and cozy corners.'),
(205, 'Leo', 2, 1, 'Ragdoll', 'image/c6.jpeg', 'A confident, chill cat who loves pets. Leo is perfect for laid-back homes.'),
(206, 'Willow', 2, 3, 'British Shorthair', 'image/c7.jpeg', 'Quiet and loving, Willow enjoys naps and window views. She’s a gentle soul.'),
(207, 'Shadow', 2, 3, 'Sphynx', 'image/c8.jpeg', 'Loyal and protective, Shadow is a great family cat. He loves attention and hugs.'),
(208, 'Misty', 2, 5, 'Abyssinian', 'image/c11.jpeg', 'Shy at first but cuddly once she warms up. Misty is gentle and sweet.'),
(301, 'Thumper', 3, 1, 'Holland Lop', 'image/b1.jpeg', 'Sweet and gentle bunny, loves to cuddle.'),
(302, 'Flopsy', 3, 2, 'Netherland Dwarf', 'image/b2.jpeg', 'Gentle and cuddly, Flopsy loves soft blankets and leafy treats.'),
(303, 'Snowball', 3, 1, 'Mini Rex', 'image/b3.jpeg', ' Soft and loving, Snowball enjoys head rubs and quiet corners.'),
(304, 'Mochi', 3, 3, 'Lionhead', 'image/b4.jpeg', 'Small, round, and full of love, Mochi loves to be held and petted.'),
(305, 'Hazel', 3, 1, 'Flemish Giant', 'image/b5.jpeg', 'Hazel is calm and friendly, always happy to see you.'),
(306, 'Clover', 3, 3, 'English Angora', 'image/b10.jpeg', 'Energetic and sweet, Clover will brighten your day with every bounce.'),
(307, 'Binky', 3, 2, 'French Lop', 'image/b7.jpeg', 'Playful and happy, Binky does little jumps when excited.'),
(308, 'Tofu', 3, 4, 'Harlequin', 'image/b6.jpeg', 'Curious and playful, enjoys exploring new spaces.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbladoption_requests`
--
ALTER TABLE `tbladoption_requests`
  ADD PRIMARY KEY (`request_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `pet_id` (`pet_id`);

--
-- Indexes for table `tblcategory`
--
ALTER TABLE `tblcategory`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbllogin`
--
ALTER TABLE `tbllogin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblpets`
--
ALTER TABLE `tblpets`
  ADD PRIMARY KEY (`pet_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbladoption_requests`
--
ALTER TABLE `tbladoption_requests`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbladoption_requests`
--
ALTER TABLE `tbladoption_requests`
  ADD CONSTRAINT `tbladoption_requests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbllogin` (`id`),
  ADD CONSTRAINT `tbladoption_requests_ibfk_2` FOREIGN KEY (`pet_id`) REFERENCES `tblpets` (`pet_id`);

--
-- Constraints for table `tblpets`
--
ALTER TABLE `tblpets`
  ADD CONSTRAINT `tblpets_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `tblcategory` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
