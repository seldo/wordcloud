# Wordcloud source generator

The word cloud generator at https://www.jasondavies.com/wordcloud/ requires, reasonably enough, a body of text. It's expecting to generate the cloud from natural language, so it counts the frequency of the words itself.

This is less helpful when your word cloud is being generated from a database query which is also counting. So this script takes a csv of keywords with counts and generates a body of text with the words in that frequency.

NB: the first line of the CSV must be "keyword,count" since our CSV parser takes those as column names (obviously, reverse those if your columns are in the opposite order, or your csv has other columns).