require 'pry'

class CommentsController < ApplicationController

    before_action :comment_inst, only: [:show, :destroy, :create]

    def index 
        comments = Comment.all
        render json: comments
    end

    def show
         if @comment
            render json: @comment
         else
            render json: {status: "error", code:3000, message: "This comment does not exist" }
         end
    end

    def destroy 
       @comment.destroy
    end

    def create 
     @comment = Comment.new(comment_params)
      comment = @comment 
   #   binding.pry
    if comment.save
      #   binding.pry
      render json: comment
    else
      render json: @comment.errors, status: :unprocessable_entity
     end
    end



      private 

      def comment_inst
         @comment = Comment.find_by_id(params[:id])
      end

      def comment_params 
        params.require(:comment).permit(:description, :shoe_id)
      end
  
end
