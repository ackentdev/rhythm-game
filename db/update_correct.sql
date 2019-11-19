UPDATE answer_log
SET correct = TRUE
WHERE answer_log.user_id = $1
AND answer_log.answer_id = $2;