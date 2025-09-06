const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8165516042:AAFifRDFu93xArHhfbAqVMe6Fs_x_BJA8Yg',
  id: isNaN(parsedId) ? 6927406670 : parsedId // replace 12345.. with your telegram chat id
};
