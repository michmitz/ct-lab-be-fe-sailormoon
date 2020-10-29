DROP TABLE IF EXISTS sailors;

CREATE TABLE sailors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  sailor_name TEXT NOT NULL,
  real_name TEXT NOT NULL,
  description TEXT NOT NULL,
  attack TEXT NOT NULL,
  zodiac_sign TEXT NOT NULL,
  image_url TEXT NOT NULL
);
