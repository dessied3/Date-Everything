import math
import numpy as np
import pandas as pd


file_path ='date_a_dex_data.csv'
col_names = ['number', 'name', 'type', 'smarts','poise', 'empathy', 'charm', 'sass']
date_a_dex = pd.read_csv(file_path, names=col_names, header=None)

print(date_a_dex)