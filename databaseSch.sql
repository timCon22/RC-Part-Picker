-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "User" (
    "UserID" int   NOT NULL,
    "username" string   NOT NULL,
    "password" password   NOT NULL,
    "SavedID" int   NOT NULL,
    CONSTRAINT "pk_User" PRIMARY KEY (
        "UserID"
     )
);

CREATE TABLE "Saved" (
    "SavedID" int   NOT NULL,
    "PartID" int   NOT NULL,
    CONSTRAINT "pk_Saved" PRIMARY KEY (
        "SavedID","PartID"
     )
);

-- Table documentation comment 1 (try the PDF/RTF export)
-- Table documentation comment 2
CREATE TABLE "Part" (
    "PartID" int   NOT NULL,
    "PartNumber" int   NOT NULL,
    "PartType" string   NOT NULL,
    "PartName" string   NOT NULL,
    "Price" money   NOT NULL,
    CONSTRAINT "pk_Part" PRIMARY KEY (
        "PartID"
     )
);

ALTER TABLE "Saved" ADD CONSTRAINT "fk_Saved_SavedID" FOREIGN KEY("SavedID")
REFERENCES "User" ("SavedID");

ALTER TABLE "Saved" ADD CONSTRAINT "fk_Saved_PartID" FOREIGN KEY("PartID")
REFERENCES "Part" ("PartID");

CREATE INDEX "idx_User_username"
ON "User" ("username");

CREATE INDEX "idx_User_password"
ON "User" ("password");

