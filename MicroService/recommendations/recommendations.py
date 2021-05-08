from concurrent import futures

import os

import sys

import grpc

import mysql.connector

import recommendations_pb2_grpc

DB_HOST = os.environ['DB_HOST']

#sys.argv[1] = os.environ.get(sys.argv[1],sys.argv[1])
#var = sys.argv[1]

connection = mysql.connector.connect(host=DB_HOST,database='BankChurners',user='root',password='')

class RecommendationService(recommendations_pb2_grpc.RecommendationsServicer):
    def Recommend(self, request, context):
        sql_select_Query = "select * from BankChurners.BankChurners where CLIENTNUM = '"+str(request.ID)+"'"

        cursor = connection.cursor()
        cursor.execute(sql_select_Query)
        row = cursor.fetchone()
        from recommendations_pb2 import (BookRecommendation,RecommendationResponse)
            
        result = BookRecommendation(
        CLIENTNUM = row[0], 
        Attrition_Flag = row[1],
        Customer_Age = row[2] ,
        Gender = row[3],
        Dependent_count = row[4],
        Education_Level = row[5],
        Marital_Status = row[6],
        Income_Category = row[7],
        Card_Category = row[8],
        Months_on_book = row[9],
        Total_Relantionship_Count = row[10],
        Months_Inactive_12_mon = row[11],
        Contacts_Count_12_mon = row[12],
        Credit_Limit = row[13],
        Total_Revolving_Bal = row[14],
        Avg_Open_To_Buy = row[15],
        Total_Amt_Chng_Q4_Q1 = row[16],
        Total_Trans_Amt = row[17],
        Total_Trans_Ct = row[18],
        Total_Ct_Chng_Q4_Q1 = row[19],
        Avg_Utilization_Ratio = row[20],
        Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Cou = row[21],
        Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Co = row[22]
        ),
         
        books_to_recommend = result[0]

        return RecommendationResponse(recommendations=books_to_recommend)
        

    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    recommendations_pb2_grpc.add_RecommendationsServicer_to_server(
        RecommendationService(), server
    )
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
