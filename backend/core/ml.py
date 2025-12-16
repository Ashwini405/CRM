def score_lead(data):
 score=0
 if data.get('email'): score+=30
 if data.get('phone'): score+=20
 return score
