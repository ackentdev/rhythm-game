SELECT ak.answer_id, img, answer_code, al.correct FROM answer_key ak
JOIN answer_log al
ON (ak.answer_id = al.answer_id)
WHERE al.user_id = $1;