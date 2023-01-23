const shortModel = require("../models/short");

exports.getShorts = async (request, response) => {
    const shorts = await shortModel.find();

    response.status(200).json({
        isDone: true,
        data: shorts,
        message: "амжилттай мэдээлэлүүдийг авлаа",
    });
};

exports.getShortById = async (request, response) => {
    const short = await shortModel.findOne({
        short: request.params.id,
    });
    if (!short) {
        response.status(404).json({
            message: `богиноо алдаатай байна`
        })
    }
    response.status(200).json({
        isDone: true,
        data: short,
        message: "амжилттай богиноо авлаа",
    });
};

exports.getShortsByUser = async (request, response) => {
    const shortsByUser = await shortModel.find({ ownerId: request.params.id });

    if (!shortsByUser) {
        response.status(404).json({
            message: `хэрэглэгч алдаатай байна`
        })
    }

    response.status(200).json({
        isDone: true,
        data: shortsByUser,
        message: "амжилттай хэрэглэгчийн богиноонуудыг авлаа",
    });
};

exports.createShort = async (request, response) => {
    if (!request?.body || !request.body.long || !request.body.short || !request.body.ownerId) {
        response.status(404).json({
            message: `link алдаатай байна`
        })
    }
    const {long, short, ownerId} = request.body;
    const createdShort = await shortModel.create({
        long,
        short,
        ownerId
    });
    response.status(200).json({
        isDone: true,
        data: createdShort,
        message: "амжилттай богиноо үүсгэллээ",
    });
};

// exports.updateShort = async (request, response) => {
//     const updatedShort = await shortModel.findByIdAndUpdate(
//         request.params.id,
//         request.body,
//         {
//             runValidators: true,
//         }
//     );

//     if (!updatedShort) {
//         response.status(404).json({
//             message: `ID алдаатай байна`
//         })
//     }

//     response.status(200).json({
//         isDone: true,
//         data: updatedShort,
//         message: "амжилттай шинчиллээ",
//     });
// };

// exports.deleteShort = async (request, response) => {
//     const deleteShort = await shortModel.findByIdAndDelete(request.params.id);

//     if (!deleteShort) {
//         response.status(404).json({
//             message: `ID алдаатай байна`
//         })
//     }

//     response.status(200).json({
//         isDone: true,
//         data: deleteShort,
//         message: "амжилттай устаглаа",
//     });
// };
