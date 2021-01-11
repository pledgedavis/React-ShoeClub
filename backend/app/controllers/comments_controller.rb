class CommentsController < ApplicationController

    before_action :comment_inst, only: [:show, :destroy]

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

    def destroy 
       @comment.destroy
    end


      private 

      def comment_inst
         @comment = Comment.find_by_id(params[:id])
      end

      def comment_params 
        params.require(:comment).permit(:description, :shoe_id)
      end
  
end
