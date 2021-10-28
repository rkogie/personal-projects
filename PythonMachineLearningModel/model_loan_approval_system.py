# -----------------------------------------------
# Machine Learning Mortgage Assessment Model
# -----------------------------------------------
# Code blocks are nested under headers, Uncomment lines of code as per instructions and run
# Visit README for more details


# Utilised Libraries
import pandas as pd
import numpy as np
import seaborn as sns
from collections import OrderedDict
from sklearn.model_selection import train_test_split as tts
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt
import warnings
warnings.filterwarnings('ignore')

# Global Variables
# Retrieve data from .csv file from local storage
train = pd.read_csv('data/train.csv')
test = pd.read_csv('data/test.csv')

# ----------------Basic Metadata Exploration---------------------
# print(train.describe()) #compiles data into total (mean, std, percentiles)
# print('Training Data Shape: ', train.shape, '\n', train.head()) # Loan Status = target variable
# print(train.columns) #Returns index object of array holding string values for column names
# print(train.dtypes) #Returns column names with corresponding data types

# ----------------Basic variable exploration---------------------
# print(train['Gender'].count()) # Counts total amount of entries in data set
# Converts data into percentage values
# print(train['Dependents'].value_counts(normalize=True)*100)


# ----------------Exploring the data visually---------------------

# ---------Nominal (Categorical) variables----------------
# (train['Loan_Status'].value_counts(normalize=True)*100).plot.bar(title='Loan Status')
# (train['Gender'].value_counts(normalize=True)*100).plot.bar(title='Gender')
# (train['Married'].value_counts(normalize=True)*100).plot.bar(title='Married Applicants')
# (train['Self_Employed'].value_counts(normalize=True)*100).plot.bar(title='Self Employed')
# (train['Credit_History'].value_counts(normalize=True)*100).plot.bar(title='Credit History')

# ---------Ordinal variables----------------
# (train['Dependents'].value_counts(normalize=True)*100).plot.bar(title='No. of Dependents')
# (train['Education'].value_counts(normalize=True)*100).plot.bar(title='Level of Education')
# (train['Property_Area'].value_counts(normalize=True)*100).plot.bar(title='Region')

# Uncomment any line of code and run with plt.show()


# ---------Ratio variables----------------
# Incomes represented as Monthly (gross)
def draw_distribution_boxplot_graphs(column_name, graph_title, x, y):
    # Distribution Graph
    plt.figure(1)
    plt.subplot(121)
    sns.distplot(train[column_name])
    plt.title(graph_title)
    plt.ylabel(y)
    plt.xlabel(x)

    # Box Graph
    plt.subplot(122)
    train[column_name].plot.box(figsize=(16, 5))
    plt.title(graph_title + ' - Box Plot')
    plt.ylabel(y)
    plt.xlabel(x)
    plt.show()

# Comparison method - Value amounts by nominal variables
def box_plot_compare_variables(var_a, var_b, graph_title):
    train.boxplot(column=var_a, by=var_b)
    plt.suptitle(graph_title)
    plt.show()


# Applicant Income
# draw_distribution_boxplot_graphs('ApplicantIncome', 'Income Dis. of applicants', '', '')

# Refine Applicant Income by Education level
# box_plot_compare_variables('ApplicantIncome', 'Education', 'Income by Education')

# Co Applicant Income
# draw_distribution_boxplot_graphs('CoapplicantIncome', 'Co-applicant Income Dis.', '', '')


# Loan_Amount - Uncomment code block & run
'''plt.figure(1)
plt.subplot(121)
df = train.dropna()
sns.distplot(df['LoanAmount'])
plt.title('Loan Amount Dis.')
plt.xlabel('Loan Value ($000)')
plt.ylabel('')

plt.subplot(122)
train['LoanAmount'].plot.box(figsize=(16, 5))
plt.title('Loan Amount Dis. - Box_Plot')
plt.ylabel('Loan Value ($000)')
plt.show()'''

# Loan_Amount_Terms - Uncomment code block & run
# --Graph 8
'''plt.figure(1)
plt.subplot(121)
df = train.dropna()
print(train.dtypes)
sns.distplot(df['Loan_Amount_Term']/12) # convert months to years
plt.title('Loan Period (years)')
# --Graph 9
plt.subplot(122)
(df['Loan_Amount_Term']/12).plot.box(figsize=(16, 5))
plt.title('Loan Period (years)')
plt.show()'''

# ---------Interpreting nominal variables relationships against the Target Variable (Loan_Status)---------

# - Custom method to generate tables with passed column names
def draw_relationship_graph(column_name):
    print((pd.crosstab(train[column_name], train['Loan_Status'])))
    data = (pd.crosstab(train[column_name], train['Loan_Status']))
    data.div(data.sum(1).astype(float), axis=0
               ).plot(kind='bar', stacked=True, figsize=(4, 4))
    plt.xlabel(column_name)
    plt.ylabel('%')
    plt.show()

# Gender & Loan Status
# draw_relationship_graph('Gender')

# Marital Status & Loan Status
# draw_relationship_graph('Married')

# Dependents & Loan Status
# draw_relationship_graph('Dependents')

# Education & Loan Status
# draw_relationship_graph('Education')

# Self Employed & Loan Status
# draw_relationship_graph('Self_Employed')

# Credit History & Loan Status
# draw_relationship_graph('Credit_History')

# Region & Loan Status
# draw_relationship_graph('Property_Area')


# ---------Interpreting ratio variables against the Target Variable (Loan_Status)---------
# Relationship between household income and loans approved
def loans_by_household_income():
    train['Total_Income'] = train['ApplicantIncome'] + train['CoapplicantIncome']
    bins = [0, 2500, 4000, 6000, 81000] # threshold values to categorize income levels
    group = ['Low', 'Average', 'Above-Average', 'High'] # related to bin array
    train['TotalIncome_bin'] = pd.cut(train['Total_Income'], bins, labels=group)

    print((pd.crosstab(train['TotalIncome_bin'], train['Loan_Status'])))
    data = (pd.crosstab(train['TotalIncome_bin'], train['Loan_Status']))
    data.div(data.sum(1).astype(float)/100, axis=0
             ).plot(kind='bar', stacked=True, figsize=(2, 2))
    plt.title('Relationship between Household Income Level and Loan Approvals')
    plt.xlabel('Combined Income')
    plt.ylabel('%')
    plt.show()

# loans_by_household_income()

# Relationship between loans approved and loan amount requested
def loan_approval_by_loan_requested():
    updated_train_data = train.dropna() # dropped cells with null values, returns DataFrame obj with complete fields
    bins = [0, 100, 200, 700]
    group = ['Low', 'Moderate', 'High']
    train['LoanAmount_bin'] = pd.cut(updated_train_data['LoanAmount'], bins, labels=group)
    print((pd.crosstab(train['LoanAmount_bin'], train['Loan_Status'])))
    data = (pd.crosstab(train['LoanAmount_bin'], train['Loan_Status']))
    data.div(data.sum(1).astype(float)/100, axis=0
             ).plot(kind='bar', stacked=True, figsize=(4, 4))
    plt.title('Relationship between Loan Amount requested and Loan Approvals')
    plt.xlabel('Loan Requested Range')
    plt.ylabel('%')
    plt.show()

# loan_approval_by_loan_requested()

# Heat Map chart showing correlation between variables - Strongest correlation
# Income Level - Loan Requested && Credit History - Approved Loan Status
def generate_heatmap():
    train['Loan_Status'].replace('N', 0, inplace=True)
    train['Loan_Status'].replace('Y', 1, inplace=True)
    matrix = train.corr()
    sns.heatmap(matrix, vmax=.8, square=True, cmap='YlGnBu', annot=True, center=0)
    plt.show()

# generate_heatmap()

def fill_in_null_values(): # Improves accuracy of model against incomplete data
    # Nominal Values - Training Data
    train['Gender'].fillna(train['Gender'].mode()[0], inplace=True)
    train['Married'].fillna(train['Married'].mode()[0], inplace=True)
    train['Dependents'].fillna(train['Dependents'].mode()[0], inplace=True)
    train['Self_Employed'].fillna(train['Self_Employed'].mode()[0], inplace=True)
    train['Credit_History'].fillna(train['Credit_History'].mode()[0], inplace=True)

    # Nominal Values - Test Data
    test['Gender'].fillna(test['Gender'].mode()[0], inplace=True)
    test['Married'].fillna(test['Married'].mode()[0], inplace=True)
    test['Dependents'].fillna(test['Dependents'].mode()[0], inplace=True)
    test['Self_Employed'].fillna(test['Self_Employed'].mode()[0], inplace=True)
    test['Credit_History'].fillna(test['Credit_History'].mode()[0], inplace=True)

    # print(train['Loan_Amount_Term'].value_counts())
    # print('\n---------------------------\n')
    # Ratio values -Training Data
    train['Loan_Amount_Term'].fillna(train['Loan_Amount_Term'].mode()[0], inplace=True)
    train['LoanAmount'].fillna(train['LoanAmount'].median(), inplace=True)
    # Ratio values -Test Data
    test['Loan_Amount_Term'].fillna(test['Loan_Amount_Term'].mode()[0], inplace=True)
    test['LoanAmount'].fillna(test['LoanAmount'].median(), inplace=True)
    # print(train['Loan_Amount_Term'].value_counts())
    # print('%s\n\n%s' % (train.isnull().sum(), test.isnull().sum()))

def updated_loan_distribution_curve():
    fill_in_null_values() # call method to change dataframes to training/test and fill null fields

    # Load the training LoanAmount data into the test data to inspect distribution curve
    # Display distribution
    test['LoanAmount_Log'] = np.log(train['LoanAmount'])
    # test['LoanAmount_Log'].hist(bins=20)
    sns.distplot(test['LoanAmount_Log'])
    plt.show()

# updated_loan_distribution_curve()

def add_features():
    fill_in_null_values()

    # Create New Feature - Total Income (train & test)
    # Normalized train dataframe and pass into test data for model accuracy
    train['Total_Income'] = train['ApplicantIncome'] + train['CoapplicantIncome']
    train['TotalIncome_Log'] = np.log(train['Total_Income'])
    test['Total_Income'] = test['ApplicantIncome'] + test['CoapplicantIncome']
    test['TotalIncome_Log'] = np.log(train['Total_Income'])
    test['LoanAmount_Log'] = np.log(train['LoanAmount'])
    train['LoanAmount_Log'] = np.log(train['LoanAmount'])


    # Create New Feature - Monthly Payments
    train['Monthly_Payments'] = (train['LoanAmount']/train['Loan_Amount_Term'])
    test['Monthly_Payments'] = (test['LoanAmount']/test['Loan_Amount_Term'])

    # Create New Feature - Balance
    train['Balance'] = train['Total_Income'] - train['Monthly_Payments']*1000
    test['Balance'] = test['Total_Income'] - test['Monthly_Payments']


    # sns.distplot(test['TotalIncome_Log'])
    # plt.title('Distribution of Total Income - Test Data')
    # plt.show()


def build_model():
    # Add new features
    add_features()

    # Switch 'char' datatype of Loan Status for numerical values for quantification
    # train['Loan_Status'].replace('N', 0, inplace=True)
    # train['Loan_Status'].replace('Y', 1, inplace=True)
    # train['Dependents'].replace('3+', 3, inplace=True)
    # test['Dependents'].replace('3+', 3, inplace=True)

    # Drop the Loan_ID & Numerical data fields that interfere with new features
    train_model_data = train.drop(['Loan_ID', 'ApplicantIncome',
                                  'CoapplicantIncome', 'LoanAmount', 'Loan_Amount_Term'], axis=1)
    test_model_data = test.drop(['Loan_ID', 'ApplicantIncome',
                                  'CoapplicantIncome', 'LoanAmount', 'Loan_Amount_Term'], axis=1)

    # Drop target variable - Loan Approved from training data - store in new variable
    X = train_model_data.drop('Loan_Status', 1)
    # print(X.head(2))
    y = train_model_data[['Loan_Status']]
    # print(y.head(2))

    X = pd.get_dummies(X)
    test_model_data = pd.get_dummies(test_model_data)
    # print(train_model_data.head(3))
    # print(train_model_data.dtypes)

    # print(test_model_data.head(3))
    # print(test_model_data.dtypes)

    # Build Model using SciKit-Learn Libraries - imported above
    # -----------------------------------------------
    # Data split 70/30 for training model and testing model respectively
    train_X, val_X, train_y, val_y = tts(X, y, test_size=0.3, random_state=1)


    # -----------------------------------------------
    # MODEL TYPES (Uncomment model of choice to run)
    # -----------------------------------------------
    # 1. Random Forest classifier
    model = RandomForestClassifier(random_state=1, max_depth=10, n_estimators=50)
    # 2. Logical Regression classifier
    # model = LogisticRegression(random_state=1)
    # 3. Decision Tree classifier
    # model = DecisionTreeClassifier(random_state=1)
    # -----------------------------------------------

    model.fit(train_X, train_y)
    predicted_value = model.predict(val_X)
    score = accuracy_score(predicted_value, val_y)*100
    test_prediction = model.predict(test_model_data)

    feat_importances = pd.Series(model.feature_importances_*100, index=X.columns)
    feat_importances.sort_values(ascending=True, inplace=True)

    feat_importances.plot(kind='barh', figsize=(12, 8), colormap='PiYG')
    plt.title('Features and Impact on Mortgage Loan Approval')
    plt.xlabel('%')
    plt.show()

    # OUTPUT RESULTS
    # -----------------------------------------------
    print(f'\nMortgage Approval Predictive Model - Accuracy Level:   {score:.2f} %')
    # print('Test Data Results:   \n', test_prediction)

build_model()












