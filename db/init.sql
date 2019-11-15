DROP TABLE IF EXISTS answer_key;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS answer_log;

-- ANSWER TABLE

CREATE TABLE answer_key(
    answer_id SERIAL PRIMARY KEY,
    img TEXT,
    answer_code VARCHAR(10)
);

INSERT INTO answer_key (img, answer_code) 
VALUES 
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution1_aucpv6.jpg','AAAA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution2_mhh10x.jpg','ABA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution3_f5jgwz.jpg','AAB'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution4_o24oyw.jpg','BAA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution5_uaowun.jpg','CA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution6_qgffja.jpg','AC'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution7_cclb6s.jpg','D'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution8_yh3npn.jpg','AEAA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution9_udxjax.jpg','AAEA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution10_coymvy.jpg','EEAA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164915/Solutions/Solution11_saaael.jpg','AEEA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164915/Solutions/Solution12_bdt6sf.jpg','AEB'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution13_afdkyl.jpg','BEA'),
('https://res.cloudinary.com/akentdev/image/upload/v1573164914/Solutions/Solution14_sujpco.jpg','CE');

-- USERS

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT
);

-- ANSWER LOG

CREATE TABLE answer_log(
    log_id SERIAL PRIMARY KEY,
    correct BOOLEAN DEFAULT FALSE,
    user_id INT REFERENCES users(user_id),
    answer_id INT REFERENCES answer_key(answer_id)
);

-- Select statement
SELECT answer_code, correct FROM answer_key ak
JOIN answer_log al
ON (ak.answer_id = al.answer_id)
WHERE al.user_id = $1;