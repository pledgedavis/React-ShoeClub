class CommentsController < ApplicationController

    before_action :comment_inst, only: [:show, :update, :destroy]

    def index 
        comments = Comment.all
        render json: comments
    end

    def show
         
    end





      private 

      def comment_inst
         @comment = Comment.find_by_id(params[:id])
      end

      def comment_params 
        params.require(:comment).permit(:description, :shoe_id)
      end
  
end
