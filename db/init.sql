DROP TABLE IF EXISTS answer_key;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS answer_log;

CREATE TABLE answer_key(
    answer_id SERIAL PRIMARY KEY,
    img TEXT,
    answer_code VARCHAR(10)
);

INSERT INTO answer_key (img, answer_code) VALUES (
    
)

render(){
    return(
        {!this.state.isEditing
        ?
        <div/>
            You can't edit
        <div>
        :
        <div/>
            You can edit!
        <div>}
    )
}