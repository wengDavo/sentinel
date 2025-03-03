CREATE TABLE IF NOT EXISTS schedule_group (
    schedule_id INTEGER NOT NULL REFERENCES schedule (schedule_id) ON DELETE CASCADE ON UPDATE CASCADE,
    groups_id INTEGER NOT NULL REFERENCES groups (groups_id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (schedule_id, groups_id)
);
