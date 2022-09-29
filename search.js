const cari = (datas, query) => {
  const data = datas.filter((data) => {
    return data.name == query;
  });
  return query == "" || query == undefined ? datas : data;
};
module.exports = cari;
