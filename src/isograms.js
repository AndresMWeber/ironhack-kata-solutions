function isIsogram(str){   return Array(...new Set(str.toLowerCase())).length === str.length }
