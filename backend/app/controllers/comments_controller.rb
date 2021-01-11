class CommentsController < ApplicationController
    def index 
        comments = Comment.all
        render json: comments
      end



      private 

      def coment_inst
         @comment = Comment.find_by_id(params[:id])
      end

      def comment_params 
      end
  
end
