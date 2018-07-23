# QuizMaster

## Description
Quiz Master is a learning system that can manage quizzes by solving quizzes.

The configuration of this system is that API is Rails, UI is react / redux.

## Requirement

* Ruby 2.5.1
* Rails 5.2.0
* API:Port 3000
* Front:Port 8081


## Installation

### Back-end

#### api server start

`git clone https://github.com/mcmht507/QuizMaster.git`

`cd QuizMaster`

`gem install bundler`

`bundle install`

`rails db:migrate RAILS_ENV=development`

`rake db:seed RAILS_ENV=development`

`rails s`

docserver's path

`http://localhost:3000/docs`

### Front-end

#### api server start

`cd QuizMaster/ui`

`yarn install`

`yarn run start`

## Usage

### Managing quizzes Mode

Login as admin user.
* email `test@test.com`
* password `mcmht507`

After logging in, CRUD of the quiz is possible.

`http://localhost:8081/manage`


### Quiz Mode

Create account.

`http://localhost:8081/register`

After registering or logging in, you can solve the quiz.

`http://localhost:8081/quiz`

## TODO
* Add back-end error test case
* Add Front-end test case
* Use TypeScript
* Add UX improvement function. ex) ranking,
* Add docker

## Author

[@mcmht507](https://github.com/mcmht507)

## License

[MIT](https://b4b4r07.mit-license.org/)