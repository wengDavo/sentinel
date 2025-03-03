CREATE TABLE IF NOT EXISTS venue_type_feature (
    venue_type_id INTEGER NOT NULL REFERENCES venue_type (venue_type_id) ON DELETE CASCADE ON UPDATE CASCADE,
    venue_feature_id INTEGER NOT NULL REFERENCES venue_feature (venue_feature_id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (venue_type_id, venue_feature_id)
);
