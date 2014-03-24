# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140321205957) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "notes", force: true do |t|
    t.text     "body"
    t.integer  "author_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "project_id"
    t.string   "title"
  end

  create_table "project_memberships", force: true do |t|
    t.integer "user_id"
    t.integer "project_id"
  end

  add_index "project_memberships", ["project_id"], name: "index_project_memberships_on_project_id", using: :btree
  add_index "project_memberships", ["user_id"], name: "index_project_memberships_on_user_id", using: :btree

  create_table "projects", force: true do |t|
    t.integer  "owner_id"
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "subtitle"
  end

  create_table "todo_lists", force: true do |t|
    t.integer  "project_id"
    t.string   "title";
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "todos", force: true do |t|
    t.string   "task"
    t.boolean  "completed"
    t.datetime "due_date"
    t.integer  "todo_list_id"
    t.integer  "author_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "assignee_id"
  end

  add_index "todos", ["author_id"], name: "index_todos_on_author_id", using: :btree
  add_index "todos", ["todo_list_id"], name: "index_todos_on_todo_list_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "fname"
    t.string   "lname"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
