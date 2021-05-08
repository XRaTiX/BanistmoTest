import grpc
import os
import sys
import csv
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from recommendations_pb2_grpc import RecommendationsStub
from recommendations_pb2 import RecommendationRequest

sys.argv[1] = os.environ.get(sys.argv[1],sys.argv[1])
var = sys.argv[1]
#var = 715318008
channel = grpc.insecure_channel("35.185.15.252:50051")
client = RecommendationsStub(channel)
request = RecommendationRequest(ID=int(var))
result = client.Recommend(request)
print(result)

# csv_columns = ['CLIENTNUM','Attrition_Flag','Customer_Age','Gender','Dependent_count','Education_Level','Marital_Status','Income_Category','Card_Category','Months_on_book','Total_Relantionship_Count','Months_Inactive_12_mon', 'Contacts_Count_12_mon', 'Credit_Limit','Total_Revolving_Bal','Avg_Open_To_Buy','Total_Amt_Chng_Q4_Q1','Total_Trans_Amt','Total_Trans_Ct','Total_Ct_Chng_Q4_Q1','Avg_Utilization_Ratio','Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon','Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_2']
# result_to_dict = [
#     {"CLIENTNUM" : result.recommendations.CLIENTNUM,
#     "Attrition_Flag" : result.recommendations.Attrition_Flag,
#     "Customer_Age" : result.recommendations.Customer_Age ,
#     "Gender" : result.recommendations.Gender,
#     "Dependent_count" : result.recommendations.Dependent_count,
#     "Education_Level" : result.recommendations.Education_Level,
#     "Marital_Status" : result.recommendations.Marital_Status,
#     "Income_Category" : result.recommendations.Income_Category,
#     "Card_Category" : result.recommendations.Card_Category,
#     "Months_on_book" : result.recommendations.Months_on_book,
#     "Total_Relantionship_Count" : result.recommendations.Total_Relantionship_Count,
#     "Months_Inactive_12_mon" : result.recommendations.Months_Inactive_12_mon,
#     "Contacts_Count_12_mon" : result.recommendations.Contacts_Count_12_mon,
#     "Credit_Limit" : result.recommendations.Credit_Limit,
#     "Total_Revolving_Bal" : result.recommendations.Total_Revolving_Bal,
#     "Avg_Open_To_Buy" : result.recommendations.Avg_Open_To_Buy,
#     "Total_Amt_Chng_Q4_Q1" : result.recommendations.Total_Amt_Chng_Q4_Q1,
#     "Total_Trans_Amt" : result.recommendations.Total_Trans_Amt,
#     "Total_Trans_Ct" : result.recommendations.Total_Trans_Ct,
#     "Total_Ct_Chng_Q4_Q1" : result.recommendations.Total_Ct_Chng_Q4_Q1,
#     "Avg_Utilization_Ratio" : result.recommendations.Avg_Utilization_Ratio,
#     "Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon" : result.recommendations.Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Cou,
#     "Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_2" : result.recommendations.Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Co}
# ]
# csv_file = "result.csv"

# try:
#     with open(csv_file, 'w') as csvfile:
#         writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
#         writer.writeheader()
#         for data in result_to_dict:
#             writer.writerow(data)
# except IOError:
#     print("I/O error")

# df = pd.read_csv("result.csv")
# df.head()
# #sns.pairplot(df.head())
# #sns.pairplot(df[['Customer_Age','Months_Inactive_12_mon']])
# sns.pairplot(df[[
#         'Attrition_Flag',
#         'Customer_Age',
#         'Gender',
#         'Dependent_count',
#         'Education_Level',
#         'Marital_Status',
#         'Income_Category',
#         'Card_Category',
#         'Months_on_book',
#         'Total_Relantionship_Count',
#         'Months_Inactive_12_mon',
#         'Contacts_Count_12_mon',
#         'Credit_Limit',
#         'Total_Revolving_Bal',
#         'Avg_Open_To_Buy' ,
#         'Total_Amt_Chng_Q4_Q1',
#         'Total_Trans_Amt',
#         'Total_Trans_Ct',
#         'Total_Ct_Chng_Q4_Q1',
#         'Avg_Utilization_Ratio']])
# plt.savefig("out.png")

