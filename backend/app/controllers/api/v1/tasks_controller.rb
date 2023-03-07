module Api
  module V1
    class TasksController < ApplicationController
      def index
        # タスクがないときは初期データを作成する
        if Task.count.zero?
          ['1st task', '2nd task', '3rd task'].each do |title|
            Task.create!(title: title)
          end
        end
        render json: { tasks: Task.all.to_json }
      end
    end
  end
end