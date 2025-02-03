module Api
  module V1
    class ChallengesController < ApplicationController
      before_action :set_challenge, only: [ :show, :update, :destroy ]

      def index
        challenges = Challenge.all
        render json: challenges, status: :ok
      end

      def show
        render json: @challenge, status: :ok
      end

      def create
        challenge = Challenge.new(challenge_params)
        if challenge.save
          render json: challenge, status: :created
        else
          render json: { errors: challenge.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @challenge.update(challenge_params)
          render json: @challenge, status: :ok
        else
          render json: { errors: @challenge.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        if @challenge.destroy
          render json: { message: "Challenge deleted" }, status: :ok
        else
          render json: @challenge.errors, status: :unprocessable_entity
        end
      end

      private
      def set_challenge
        @challenge = Challenge.find(params[:id])
      end

      def challenge_params
        params.require(:challenge).permit(:title, :description, :start_date, :end_date)
      end
    end
  end
end
