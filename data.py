import math
import numpy as np
import pandas as pd


file_path ='date_a_dex_data.csv'
dad_col_names = ['number', 'name', 'type', 'smarts','poise', 'empathy', 'charm', 'sass']
date_a_dex = pd.read_csv(file_path, names=dad_col_names, header=None)

smarts = 30 

date_a_dex_smarts = date_a_dex.sort_values(by=['smarts','poise','empathy', 'charm', 'sass'])
print(date_a_dex_smarts)

us_col_names = ['smarts', 'poise', 'empathy', 'charm', 'sass']
my_specs_data = [0, 60, 5, 35, 70]
my_specs = pd.DataFrame(columns=us_col_names)



