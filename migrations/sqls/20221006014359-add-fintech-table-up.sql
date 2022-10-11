/* Replace with your SQL commands */
CREATE TABLE fintech(
 id SERIAL PRIMARY KEY,
 name VARCHAR(50),
 location VARCHAR(50),
 created_at TIMESTAMPTZ DEFAULT NOW(),
 updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO fintech(name, location)
VALUES
  ('Paystack', 'Lagos'),
  ('Opay', 'Kaduna'),
  ('Kuda', 'Kano'),
  ('V-bank', 'London'),
  ('interswitch', 'Abuja');