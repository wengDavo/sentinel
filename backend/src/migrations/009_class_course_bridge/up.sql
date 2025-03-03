CREATE TABLE IF NOT EXISTS class_course (
    class_id INTEGER NOT NULL REFERENCES class(class_id) ON DELETE CASCADE,
    course_id INTEGER NOT NULL REFERENCES course(course_id) ON DELETE CASCADE,
    PRIMARY KEY (class_id, course_id)
);
